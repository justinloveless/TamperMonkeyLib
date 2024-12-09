const path = require('path');
const { UserscriptPlugin } = require('webpack-userscript');
const Ajv = require('ajv');
// const headers = require('./userscript-headers.json'); // Load static headers
const fs = require('fs');

// Define the path to your metadata file where the version is stored
const versionFilePath = path.resolve(__dirname, 'version.json');


// Read and increment the version dynamically
const getUpdatedVersion = () => {
    let versionData;
    try {
        // Read the version file
        versionData = JSON.parse(fs.readFileSync(versionFilePath, 'utf8'));
    } catch (error) {
        console.error('Error reading version file:', error);
        versionData = { version: '1.0.0' }; // Default version if the file doesn't exist
    }

    // Increment the patch version
    const versionParts = versionData.version.split('.').map(Number);
    versionParts[2] += 1; // Increment the patch number
    const newVersion = versionParts.join('.');

    // Save the updated version back to the file
    fs.writeFileSync(versionFilePath, JSON.stringify({ version: newVersion }, null, 2));

    return newVersion;
};

// Get the new version
const updatedVersion = getUpdatedVersion();



// Load and validate the headers
const headersPath = path.resolve(__dirname, 'userscript-headers.json');
let headers = JSON.parse(fs.readFileSync(headersPath, 'utf-8'));

const ajv = new Ajv();
const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    version: {type: 'string' },
    description: { type: 'string' },
    author: { type: 'string' },
    match: { type: 'array', items: { type: 'string' } },
    grant: { type: 'array', items: { type: 'string' } }
  },
  required: ['name', 'version', 'match'],
};
headers = {...headers, version: updatedVersion};

if (!ajv.validate(schema, headers)) {
  throw new Error('Invalid userscript headers: ' + ajv.errorsText());
}

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script.user.js', // Output file
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'], // Transpile to ES5
                    },
                },
            },
        ],
    },
    plugins: [ new UserscriptPlugin({
        headers,
        })],
    mode: 'production', // Use 'development' for easier debugging
};

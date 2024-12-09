const path = require('path');
const { UserscriptPlugin } = require('webpack-userscript');
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
        headers: {
            name: 'Your Script Name',
            namespace: 'http://tampermonkey.net/',
            version: updatedVersion,
            description: 'Your description here',
            author: 'Your Name',
            match: ['https://www.crunchyroll.com/simulcastcalendar*'], // URL patterns to match
            iconUrl: 'https://www.google.com/s2/favicons?sz=64&domain=crunchyroll.com',
            grant: ['GM_getValue', 'GM_setValue'], // Required GM APIs},
            updateURL: 'https://raw.githubusercontent.com/justinloveless/TamperMonkeyLib/main/dist/script.user.js',
        }
        })],
    mode: 'production', // Use 'development' for easier debugging
};

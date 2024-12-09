# Configuring Your Repository
After creating a new repository based on this template, make sure to update your repository settings to enable Workflows to write to the repository. If you don't, then auto updates for TamperMonkey won't work. 

To enable write permissions for Workflows, go to `Settings > Actions > General` and under the Workflow permissions section, enable Read and Write permissions. 

# Configuring Your TamperMonkey Script
In the `userscript-headers.json` file, make sure to update the properties as needed for your TamperMonkey script. 
This json is used to populate a UserscriptPlugin object, which creates the necessary userscript header comments after webpack finishes compiling. 
See the [UserscriptPlugin](https://github.com/momocow/webpack-userscript?tab=readme-ov-file#load-headers) repository for more details. 

The script version will automatically update whenever a change is made to the main branch.

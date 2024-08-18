const fs = require('fs');


// Define your default values here
const defaultProperties = {
    launcher: '0.0.0',
    client: '0.0.0',
    launcher_html: '0.0.0',
};



const createDefaultPropertiesFile = (filePath) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(defaultProperties, null, 2), 'utf8');
        console.log('Properties file created with default values.');
        return defaultProperties;
    } catch (err) {
        console.error('Error creating properties file:', err);
        return {};
    }
};

const readPropertiesFile = () => {
    const filePath = './resource_versions.json'
    try {

        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(data);
        }

        return createDefaultPropertiesFile(filePath)
    } catch (err) {
        console.error('Error reading properties file:', err);
        return {};
    }
};

const writePropertiesFile = (data) => {
    const filePath = './resource_versions.json';
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (err) {
        console.error('Error writing to properties file:', err);
    }
};

module.exports = {
    readPropertiesFile,
    writePropertiesFile
};

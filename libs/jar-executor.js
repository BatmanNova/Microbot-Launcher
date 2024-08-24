const { exec } = require('child_process');
const {logMessage} = require("./logger");

function executeJar(command, callback) {
    // Execute the JAR file
    logMessage(command)
    exec(command, (error, stdout, stderr) => {
        try {
            if (error) {
                logMessage(error.message)
                console.error(`Error executing JAR: ${error.message}`);
                if (callback) callback(error, null);
                return;
            }
            if (stderr) {
                logMessage(error.message)
                console.error(`JAR stderr: ${stderr}`);
            }
            if (stdout) {
                logMessage(error.message)
                console.log(`JAR stdout: ${stdout}`);
            }
            if (callback) callback(null, stdout);
        } catch(exception) {
            logMessage(exception?.message)
        }

    });
}


module.exports = {
    executeJar,
};
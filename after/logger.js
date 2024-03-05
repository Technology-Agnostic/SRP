class Logger {
    info(...logData) {
        const date = new Date().toISOString();
        const prefix = '[info]';
        console.log(...logData);
    }
}

module.exports = Logger;
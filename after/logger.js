class Logger {
    info(...logData) {
        const date = new Date().toISOString();
        const prefix = '[info]';
        console.log(prefix, date, ...logData);
    }
}

module.exports = Logger;

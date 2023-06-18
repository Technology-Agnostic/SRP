class Logger {
    info(...data) {
        const date = new Date().toISOString();
        const prefix = '[info]';
        console.log(prefix, date, data);
    }
}

module.exports = Logger;
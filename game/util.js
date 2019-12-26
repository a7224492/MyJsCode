class Util {
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
}

module.exports = new Util();
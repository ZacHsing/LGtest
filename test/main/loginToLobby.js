
module.exports = {
    "testing": browser => {
        browser
        .url('http://google.com')
        .waitForElementPresent('#fbar > div > div > div > span')
        // .waitForElementPresent('.a',1000,'not found')
        .end()
    }
}

module.exports = {
    "sideBar選擇": browser => {
        const lobbyPage = browser.page.lobbyPage()
        browser.login()
        lobbyPage
            .waitForElementPresent('@sideBar', '檢查側欄')
            .verify.containsText({selector:'@sideBar', index:1},'全部')
            .click({selector:'@sideBar', index:1})
            .waitForElementPresent('@subMenu', '檢查側欄項目')
            
    },
    "機選一注": browser => {
       const lobby =  browser.page.lobbyPage()
       let title = ''
            lobby
                .selectSubMenu(4)    
                .waitForElementNotPresent('.panel is-closed',10000)
                .waitForElementPresent('@gameTitle','取得遊戲標題')
                .getText('@gameTitle',res => {
                    title = res.value
                })
                .waitForElementPresent('@randomPick',2000,'機選一注ok')
                .verify.attributeEquals('@randomPick', 'class', 'btn btn--border btn-auto', '投注功能ok')
                .click('@randomPick')
                .click('@orderBtn')
                .waitForElementVisible('.snotifyToast-game',2000,'確認彈出視窗')
                .getText('.snotifyToast-game',res => {
                    browser.assert.equal(res.value, title,`${title}投注成功`)
                })
 
            browser.end()

    }


}
exports.command = function (){
    const lobby = this.page.lobbyPage()
    var gameclosedmode =''
    lobby
        .waitForElementPresent('.panel', 10000, '進入遊戲')
        .getAttribute('@timer', 'countdown',res => {
            if(res.value === 0) {
                console.log('準備中,等待下次開盤..... ')
                lobby
                    .pause(10000)
                    .waitForElementPresent('.panel','此次等待花了 %d ms')
            }
        })
        .selectSubMenu(2) 
        .selectSubMenu(1)   
        .getAttribute('.panel','gameclosedmode',res => {
            gameclosedmode = res.value
            if(res.value == true){
                console.log(res.value)
                console.log('關')
            }
            else{
                console.log(res.value)
                console.log('開')
            }
        })
       
        
    
        
    return this;
}
// 判斷目前是否為關盤狀態
// 判斷目前是否為遊戲準備進入下一盤, 等待10秒後再次測試
exports.command = function (){
    const lobby = this.page.lobbyPage()
    let time = null
    lobby
        .getText('@timer', res => { time = res.value })
    
        if(time === '00:00:00'){
            this.pause(5000)
            .waitForElementNotPresent('.panel is-closed',10000)
        } else{
            this.waitForElementNotPresent('.panel is-closed',10000)
        }
        if(lobby.verify.attributeContains('@timer', 'class', 'gameInfo-time is-closed')){
            this.selectSubMenu(3)
        }
        
    return this;
}
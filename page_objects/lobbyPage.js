module.exports = {
    elements: {
        gameTitle:{
            selector:'.gameInfo-title'
        },
        sideBar:{
            selector:".sideBar-menu > .sideBar-menuItem > .sideBar-menuInfo > .sideBar-menuName",
            index: 0
        },
        subMenu: {
            selector:".sideBar-menu > .sideBar-menuItem.is-active > .sideBar-subMenu > .sideBar-subMenuItem",
            index:0
        },
        randomPick:{
            selector:".orders > div:nth-child(2) > .orders-autoTool > button:nth-child(1)",
        },
        orderBtn:{
            selector:'.btn--mainRed.btn-betTool-bet'
        },
        // timer:'#app > div.lobby > div.mainArea > div.mainArea-content > div > div.panel > div.gameInfo > div.gameInfo-current > div.gameInfo-time',
        
        
    },
}
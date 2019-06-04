exports.command = function (game){
    const lobby = this.page.lobbyPage()
    lobby
        .click({selector:'@subMenu', index:game-1})
        
    return this;
}
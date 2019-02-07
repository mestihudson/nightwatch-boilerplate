module.exports = {
  'Eu mesmo fazendo a parada' : function (browser) {
    const myaccount =  browser.page.myaccount()
    myaccount.navigate()
      .assert.title('The University of British Columbia')
      .assert.visible('@usuario')
      .setValue('@usuario', 'usuario')
      .assert.visible('@password')
      .setValue('@password', 'senha')
      .click('@login')
  }
};

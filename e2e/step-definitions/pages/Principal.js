const { Builder, By } = require('selenium-webdriver')

export default class Principal {
	constructor (browser = 'chrome') {
		this.driver = new Builder()
		  .forBrowser(browser)
			.usingServer('http://hub:4444/wd/hub')
			.build()
		this.driver.get(process.env.BASE_URL)
	}

	get title () {
		return Promise.resolve(this.driver.getTitle())
		// return this.driver.getTitle()
	}
}

class HotelTermsPage {


    //Locators of webElements on Terms and Cond. page
termsSubHeaderLocator = 'h1=TERMS OF SERVICE'
lastRevisedLocator = 'span*=01/01/23'


    //Functions to interact with webElements on Terms and Cond. page

async switchingToTermsHandle() {
    const connectedHandle = await browser.getWindowHandle();

    const allhandles = await browser.getWindowHandles();
    for (const handle of allhandles) {
        await browser.switchToWindow(handle);
        const currentUrl = await browser.getUrl();
        console.log(`current url -> ${currentUrl}\n\n`);
        if (currentUrl.localeCompare('https://www.hotels.com/lp/b/terms-of-service') === 0) {
            return handle;
        }
    }
}
async isTermsSubHeaderDisplayed() {
    const termsSubHeader = await $(this.termsSubHeaderLocator);
    return termsSubHeader.isDisplayed();    
}

async lastRevisedDateLocator() {
    const lastRevisedDate = await $(this.lastRevisedLocator).getText();
    return lastRevisedDate;
}


}

module.exports = HotelTermsPage;
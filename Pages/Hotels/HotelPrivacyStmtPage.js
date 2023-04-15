class HotelPrivacyStmtPage {

    //Locators of webElements on privacy page
    privacySubHeader = '(//h2[text() = "Privacy Statement"])[1]';
    lUpdatedLocator = 'p*=20 December, 2022';

//Functions to interact with webElements on privacy page
async switchingToPrivacyStmtHandle() {
    const connectedHandle =await browser.getWindowHandle();

    const allhandles = await browser.getWindowHandles();
    for (const handle of allhandles) {
        await browser.switchToWindow(handle);
        const currentUrl = await browser.getUrl();
        console.log(`current url -> ${currentUrl}\n\n`);
        if (currentUrl.localeCompare('https://www.hotels.com/customer_care/privacy.html') === 0) {
            return handle;
        }
    }
}

async isPrivacySubHeaderDisplayed() {
    const privacySubHeader = await $(this.privacySubHeader)
    return privacySubHeader.isDisplayed();
}

async lastUpdatedLocator() {
    const lastUpdatedDate = await $(this.lUpdatedLocator).getText();
    return lastUpdatedDate;
}

}
module.exports = HotelPrivacyStmtPage;
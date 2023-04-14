class HotelFeedBackPage {

    //Locators of webElements on Feedback page
submitBttnLocator = 'button=Submit';
errorMsgLocator = 'p=Please fill in the required information highlighted below.';
redDottedLineLocator = 'fieldset[style*=2px dotted]';
star5locator = 'label[for=page-rating-5]';
commentBoxLocator = '//textarea[contains(@placeholder, "Please enter")]';
returnTohotelLocator = '#will-you-return';
priorBookingLocator = 'label[for=booked-here-before-yes]';
accomplishLocator = 'label[for=were-you-successful-yes]';
thankyouMsgLocator = 'h5=THANK YOU FOR YOUR FEEDBACK.'


    //Functions to interact with webElements on
   async switchingToFeedbackHandle() {
    const connectedHandle =await browser.getWindowHandle();

    const alhandles = await browser.getWindowHandles();
    for (const handle of alhandles) {
        await browser.switchToWindow(handle);
        const currentUrl = await browser.getUrl();
        console.log(`current url -> ${currentUrl}\n\n`);
        if (currentUrl.localeCompare('https://www.directword.io/survey/domain=www.hotels.com/locale=en_US?metadata=%7B%22url%22%3A%22https%3A%2F%2Fwww.hotels.com%2F%3Fpos%3DHCOM_US%26locale%3Den_US%22%2C%20%22duaid%22%3A%20%22026b2273-90c0-4ea6-b94e-1749cb7b97f9%22%7D') === 0) {
            return handle;
        }
    }
   } 

async clickSubmitBttn() {
    const submitBttn = await $(this.submitBttnLocator);
    await submitBttn.scrollIntoView(false);
    await submitBttn.click();
}

async isErrorMsgDisplayed() {
    const errorMsg = await $(this.errorMsgLocator);
    await errorMsg.scrollIntoView(false);
    return errorMsg.isDisplayed();
}

async isRedDottedLineDisplayed() {
    const redDottedLine = await $(this.redDottedLineLocator);
    return redDottedLine.isDisplayed();
}

async selecting5Star() {
    const star5 = await $(this.star5locator);
    await star5.click();
}

async setValueOnCommentBox() {
    const commentBox = await $(this.commentBoxLocator);
    return commentBox.setValue('Testing')
}

async selectingSomewhat() {
    const rtn2HotelDrpDwn = await $(this.returnTohotelLocator);
    await rtn2HotelDrpDwn.selectByIndex(2);
}

async selectingPriorBookingYes() {
    const priorBookingYes = await $(this.priorBookingLocator);
    await priorBookingYes.click();
}

async selectingAccomplishYes() {
    const accomplishYes = await $(this.accomplishLocator);
    await accomplishYes.scrollIntoView(false);
    await accomplishYes.click();
}

async isThankYouMsgDisplayed() {
    const thankYouMsg = await $(this.thankyouMsgLocator);
    return thankYouMsg.isDisplayed();
}
}
module.exports = HotelFeedBackPage;
const { expect } = require("chai");

class HotelSignupPage {

//Locators of webElements on sign up page
signUpHeader = 'h1=Create an account';
emailLocator = '#signupFormEmailInput';
emailErrorMsgLocator = 'div=Enter a valid email.';
firstNameLocator = '#signupFormFirstNameInput';
fNameErrorMsgLocator = 'div=First name cannot contain special characters';
lastNameLocator = '#signupFormLastNameInput';
lNameErrorMsgLocator = 'div=Last name cannot contain special characters'
passwordLocator = '#signupFormPasswordInput';
rmbrMeCheckBxHeaderLocator = '//span[text()="Keep me signed in"]';
rmbrMeCheckBxLocator = '#rememberMeSignUpCheckbox';
continueBttnLocator = '#loginFormSubmitButton';
emailInputLOcator = '#loginFormEmailInput';
enlishLangLocator = 'div=English';

termsAndCondLocator = 'a=Terms and Conditions';
privacyStatementLocator= 'a=Privacy Statement';

//Functions to interact with webElements on sign up page
async switchingToSignUpHandle() {
    const connectedHandle = await browser.getWindowHandle();

    const allHandles = await browser.getWindowHandles();
    for (const handle of allHandles) {
        await browser.switchToWindow(handle);
        const currentUrl = await browser.getUrl();
        console.log(`current url -> ${currentUrl}\n\n`);
        if (currentUrl.localeCompare('https://www.hotels.com/signup?&uurl=e3id%3Dredr%26rurl%3D%2F') === 0) {
          return handle;
    }}
}

async enteringInvalidEmail() {
    const emailField = await $(this.emailLocator);
    await emailField.setValue('x!@###');
}

async invalidEmailInput() {
    const emailField = await $(this.emailInputLOcator);
    await emailField.setValue('x!@###');
    await browser.pause(1000);
}

async clickContinueBttn() {
    const clickContinue = await $(this.continueBttnLocator);
    await clickContinue.click();
    await browser.pause(2000);
}


async isEmailErrorDisplayed() {
    const emailErrorMsg = await $(this.emailErrorMsgLocator);
    return emailErrorMsg.isDisplayed();
    expect(emailErrorMsg, 'Email error mesage is NOT displayed').to.be.true;
}

async enteringInvalidFirstName() {
    const fNameField = await $(this.firstNameLocator);
    await fNameField.setValue('!@');
}

async isfNameErrorDisplayed() {
    const fNameMsg = await $(this.fNameErrorMsgLocator);
    return fNameMsg.isDisplayed();
}

async enteringInvalidLastName() {
    const lNameField = await $(this.lastNameLocator);
    await lNameField.setValue('%-&');
}

async islNameErrorDisplayed() {
    const lNameMsg = await $(this.lNameErrorMsgLocator);
    return lNameMsg.isDisplayed();
}

async enteringPswd() {
    const pswdField = await $(this.passwordLocator);
    await pswdField.setValue('Password@23')
}

async isCheckBoxDisplayed() {
    const checkBoxField = await $(this.rmbrMeCheckBxHeaderLocator);
    return checkBoxField.isDisplayed();
}

async isCheckBoxEnabled() {
    const checkBoxField = await $(this.rmbrMeCheckBxLocator);
    return checkBoxField.isEnabled();
}

async isContinueBttnDisplayed() {
    const continueBttn = await $(this.continueBttnLocator);
    return continueBttn.isDisplayed();
}

async isContinueBttnNotEabled() {
    const continueBttn = await $(this.continueBttnLocator);
    return continueBttn.isEnabled();
}

async clickTermsAndCond() {
    const termsAndCond = await $(this.termsAndCondLocator);
    await termsAndCond.click();
}

async clickPrivacyStatement() {
    const privacyStmt = await $(this.privacyStatementLocator);
    await privacyStmt.click();
}


}


module.exports = HotelSignupPage;

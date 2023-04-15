const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const HotelHomePage = require("../../Pages/Hotels/HotelHomePage");
const HotelSignupPage = require("../../Pages/Hotels/HotelSignupPage");

const hotelhome = new HotelHomePage();
const hotelsignup = new HotelSignupPage();

//TC-22
Given(/^I am on hotels homepage$/, async function() {
    await browser.url('/');
    await browser.pause(1000);
})

When(/^I click on SignIn link$/, async function() {
    await hotelhome.clickSignInBttn();
    await browser.pause(2000);
})

When(/^I click on SignUp link$/, async function() {
    await hotelhome.clickSignUpBttn();
    await browser.pause(2000)
})

When(/^I switch window handle to signup page$/, async function() {
    await hotelsignup.switchingToSignUpHandle();
    await browser.pause(2000);
})

When(/^I enter invalid emailAddress with as x!@###$/, async function() {
    await hotelsignup.enteringInvalidEmail();
    await browser.pause(2000)
})

Then(/^I verify error is displayed Enter a valid Email.$/, async function() {
    const isEmailErrorMsgDisplayed = await hotelsignup.isEmailErrorDisplayed();
    expect(isEmailErrorMsgDisplayed, 'Email Error Msg is NOT Displayed').to.be.true;
})

When(/^I enter invalid firstName as !@$/, async function() {
    await hotelsignup.enteringInvalidFirstName();
    await browser.pause(2000);
})

Then(/^I verify error is displayed as First name cannot contain special characters$/, async function() {
    const isfNameErrorMsgDisplayed = await hotelsignup.isfNameErrorDisplayed();
    expect(isfNameErrorMsgDisplayed, 'First Name Error is NOT Displayed').to.be.true;
})

When(/^I enter invalid last name as %-&$/, async function() {
    await hotelsignup.enteringInvalidLastName();
    await browser.pause(2000);
})

Then(/^I verify error is displayed as Last name cannot contain special characters$/, async function() {
    const islNameErrorMsgDisplayed = await hotelsignup.islNameErrorDisplayed();
    expect(islNameErrorMsgDisplayed, 'Last Name Error Name is NOT Displayed').to.be.true;
})

When(/^I enter a password as Password@23$/, async function() {
    await hotelsignup.enteringPswd();
    await browser.pause(2000);
})

Then(/^I verify "Keep me signed in" checkbox is displayed$/, async function() {
    const isCheckBoxDisplaying = await hotelsignup.isCheckBoxDisplayed()
    expect(isCheckBoxDisplaying, 'Keep me signed in checkbox is NOT displaying').to.be.true;
})

Then(/^I verify "Keep me signed in" checkbox is enabled$/, async function() {
    const isCheckBoxEnable = await hotelsignup.isCheckBoxEnabled();
    expect(isCheckBoxEnable, 'Keep me signed in checkboc is NOT enabled').to.be.true;
})

Then(/^I verify "Continue" button is displayed$/, async function() {
    const isContinueBttnDisplaying = await hotelsignup.isContinueBttnDisplayed();
    expect(isContinueBttnDisplaying, 'Continue button is NOT displaying').to.be.true;
})

Then(/^I verify "Continue" button is not enabled$/, async function() {
    const isContinueBttnNotEable = await hotelsignup.isContinueBttnNotEabled();
    expect(isContinueBttnNotEable, 'Continue button IS enabled').to.be.false;
})
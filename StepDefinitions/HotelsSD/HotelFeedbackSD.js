const { Then, Given, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const HotelFeedBackPage = require("../../Pages/Hotels/HotelFeedBackPage");
const HotelHomePage = require("../../Pages/Hotels/HotelHomePage");


const hotehomepage = new HotelHomePage();
const hotelfeedbackpage = new HotelFeedBackPage();

When(/^I am on hotels homepage$/, async function() {
    await browser.url('/');
    await browser.pause(1000);
})

When(/^I click on SignIn link$/, async function() {
    await hotehomepage.clickSignInBttn();
    await browser.pause(2000);
})

When(/^I click “Feedback”$/, async function() {
    await hotehomepage.clickFeedBaackBttn();
    await browser.pause(2000);
})

When(/^I switch window handle to feedback page$/, async function() {
    await hotelfeedbackpage.switchingToFeedbackHandle();
    await browser.pause(2000);
})

When(/^I click on Submit button$/, async function() {
    await hotelfeedbackpage.clickSubmitBttn();
    await browser.pause(2000);
})

Then(/^I verify error message is displayed Please fill in the required information highlighted below.$/, async function() {
    const isErrorMsgDisplaying = await hotelfeedbackpage.isErrorMsgDisplayed();
    expect(isErrorMsgDisplaying, 'Error message is NOT displaying').to.be.true;
    await browser.pause(2000);
})

Then(/^I verify red-dotted line is displayed around star-section.$/, async function() {
    const isRedDottedLineDisplaying = await hotelfeedbackpage.isErrorMsgDisplayed();
    expect(isRedDottedLineDisplaying,'Red Dotted Line is NOT displaying').to.be.true;
})
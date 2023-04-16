const { Then, Given, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const HotelFeedBackPage = require("../../Pages/Hotels/HotelFeedBackPage");
const HotelHomePage = require("../../Pages/Hotels/HotelHomePage");

const hotelfeedbackpage = new HotelFeedBackPage();
const hotehomepage = new HotelHomePage()


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

Then(/^I switch window handle to feedback page$/, async function() {
    await hotelfeedbackpage.switchingToFeedbackHandle();
    await browser.pause(2000);
})

When(/^I select any star-rating$/, async function() {
    await hotelfeedbackpage.selecting5Star();
    await browser.pause(1000);
})

When(/^I enter any comments$/, async function() {
    await hotelfeedbackpage.setValueOnCommentBox();
    await browser.pause(1000);
})

When(/^I select any option for How likely are you to return to Hotels.com$/, async function() {
    await hotelfeedbackpage.selectingSomewhat();
    await browser.pause(1000);
})

When(/^I select any answer for Prior to this visit, have you ever booked on Hotels.com$/, async function() {
    await hotelfeedbackpage.selectingPriorBookingYes();
    await browser.pause(1000);
})

When(/^I select any answer for Did you accomplish what you wanted to do on this page$/, async function() {
    await hotelfeedbackpage.selectingAccomplishYes();
    await browser.pause(1000);
})

When(/^I click on Submit button$/, async function() {
    await hotelfeedbackpage.clickSubmitBttn();
    await browser.pause(10000);
})

Then(/^I verify THANK YOU FOR YOUR FEEDBACK. is displayed$/, async function() {
    const isThankYouMsgDisplaying = await hotelfeedbackpage.isThankYouMsgDisplayed();
    expect(isThankYouMsgDisplaying, 'Thank You message is NOT displaying').to.be.true;
})
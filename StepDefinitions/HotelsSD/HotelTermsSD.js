// const { Given, Then } = require("@wdio/cucumber-framework");
// const { expect } = require("chai");
// const moment = require("moment");
// const HotelHomePage = require("../../Pages/Hotels/HotelHomePage");
// const HotelPrivacyStmtPage = require("../../Pages/Hotels/HotelPrivacyStmtPage");
// const HotelSignupPage = require("../../Pages/Hotels/HotelSignupPage");
// const HotelTermsPage = require("../../Pages/Hotels/HotelTermsPage");

// const hotelhome = new HotelHomePage();
// const hotelsignup = new HotelSignupPage();
// const hotelterms = new HotelTermsPage();
// const hotelprivacy = new HotelPrivacyStmtPage();

// Given(/^I am on hotels homepage$/, async function() {
//     await browser.url('/');
//     await browser.pause(1000);
// })

// Then(/^I click on SignIn link$/, async function() {
//     await hotelhome.clickSignInBttn();
//     await browser.pause(2000);
// })

// Then(/^I click on SignUp link$/, async function() {
//     await hotelhome.clickSignUpBttn();
//     await browser.pause(2000)
// })

// Then(/^I switch window handle to signup page$/, async function() {
//     await hotelsignup.switchingToSignUpHandle();
//     await browser.pause(2000);
// });

// Then(/^I click “Terms and Conditions” link$/, async function() {
//     await hotelsignup.clickTermsAndCond();
//     await browser.pause(2000);
// })

// Then(/^I switch window handle to Terms and Conditions page$/, async function() {
//     await hotelterms.switchingToTermsHandle();
//     await browser.pause(2000);
// })

// Then(/^I verify “Terms and Conditions” page opens in new tab$/, async function() {
//     const isTermsSubHeaderDisplaying = await hotelterms.isTermsSubHeaderDisplayed();
//     expect(isTermsSubHeaderDisplaying, 'Terms and Conditions Page Did NOT Open').to.be.true;
// })

// Then(/^I verify that the Last revised date is formatted as MM\/dd\/yy$/, async function() {
//     const lastRevisedText = await hotelterms.lastRevisedDateLocator();
//     const dateOnly = lastRevisedText.split(':')[1].trim();
//     const expectedDateFormat = 'MM/DD/YY';
//     const lastRevisedDate = moment(dateOnly, 'MM/DD/YY');
    
//     expect(lastRevisedDate.format(expectedDateFormat)).to.equal(dateOnly);
// });

// Then(/^I switch window handle back to signup page again$/, async function() {
//     await hotelsignup.switchingToSignUpHandle();
//     await browser.pause(2000);
// })

// Then(/^I click “Privacy Statement” link$/, async function() {
//     await hotelsignup.clickPrivacyStatement();
//     await browser.pause(2000);
// })

// Then(/^I switch handle window handle to Privacy Statement page$/, async function() {
//     await hotelprivacy.switchingToPrivacyStmtHandle();
//     await browser.pause(2000);
// })

// Then(/^I verify “Privacy Statement” page opens in new tab$/, async function() {
//     const isPrivacySubHeaderDisplaying = await hotelprivacy.isPrivacySubHeaderDisplayed();
//     expect(isPrivacySubHeaderDisplaying, 'Privacy Statement Page Is NOT Open').to.be.true;
// })


// Then(/^I verify “Last Updated“ formatted as dd MMMM, yyyy$/, async function() {
//     const lastUpdatedText = await hotelprivacy.lastUpdatedLocator();
//     const datesOnly = lastUpdatedText.split(':')[1].trim();
//     const expectedDateFormat = 'dd MMMM, yyyy';
//     console.log(`Actual date string: ${datesOnly}`);

//     const lastUDate = moment(datesOnly, 'DD MMMM, YYYY');
//     console.log(`Moment date: ${lastUDate.format(expectedDateFormat)}`);
//     console.log(`lastUDate: ${lastUDate}`);

//     expect(lastUDate.format(expectedDateFormat)).to.equal(datesOnly);
// })



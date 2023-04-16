const { Then, Given, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const HotelHomePage = require("../../Pages/Hotels/HotelHomePage");

const hotelhomepage = new HotelHomePage();

When(/^I am on hotels homepage$/, async function() {
    await browser.url('/');
    await browser.pause(1000);
})

When(/^I click on Travelers$/, async function() {
    await hotelhomepage.clickTravelersBox();
    await browser.pause(2000);
})

When(/^I select “Adults" as 6$/, async function() {
    await hotelhomepage.add6Adults();
    await browser.pause(2000);
})

When(/^I select “Children” as 3$/, async function() {
    await hotelhomepage.add3Children();
    await browser.pause(2000);
})

When(/^I select first child age: 4$/, async function() {
    await hotelhomepage.selectingAge4C1();
    await browser.pause(1000);
    
})

 When(/^I select second child age: Under 1$/, async function() {
    await hotelhomepage.selectingAgeUnder0C2();
    await browser.pause(2000);
})

When(/^I select third child age: 7$/, async function() {
    await hotelhomepage.selectingAge7C3()
    await browser.pause(2000);
})

When(/^I click Done$/, async function() {
    await hotelhomepage.clickDoneBttn();
    await browser.pause(2000);
})

Then(/^I verify total number of Travelers is sum of adults and children as same as selected on step #3 and #4.$/, async function() {
    const is9TravelersDisplaying = await hotelhomepage.is9TravelersDisplayed();
    expect(is9TravelersDisplaying, 'Total Number of Travelers sum is NOT diplaying').to.be.true;
})
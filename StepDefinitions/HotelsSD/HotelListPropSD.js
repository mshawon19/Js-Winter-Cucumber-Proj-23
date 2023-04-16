const { When, Then } = require("@wdio/cucumber-framework");
const HotelHomePage = require("../../Pages/Hotels/HotelHomePage");
const VrboListPropPage = require("../../Pages/Hotels/VrboListPropPage");


const hotelhome = new HotelHomePage();
const vrbolistpage = new VrboListPropPage()

When(/^I am on hotels homepage$/, async function() {
    await browser.url('/');
    await browser.pause(1000);
})

When(/^I click on List your property$/, async function() {
    await hotelhome.clickListYourProperty();
})

When(/^I switch window to Property Info$/, async function() {
    await hotelhome.switchingToPropertyHandle();
})

Then(/^I verify What would you like to list is displayed$/, async function() {
    await hotelhome.isTextDisplayed();
})

Then(/^I verify Lodging option is displayed$/, async function() {
    await hotelhome.isLodgingDispalyed();
})

Then(/^I verify Private residence option is displayed$/, async function() {
    await hotelhome.isPrivateResDisplayed();
})

When(/^I click on Private residence$/, async function() {
    await hotelhome.clickPrivateRes();
})

Then(/^I verify Step 1 of 3 is displayed$/, async function() {
    await vrbolistpage.isStep1Of2Displayed();
})

Then(/^I erify See how much you could earn is displayed$/, async function() {
    await vrbolistpage.isHowMuchYouDisplayed();
})

When(/^I enter 4 as bedroom$/, async function() {
    await vrbolistpage.increaseBedrooms(5);
})

When(/^I enter 2.5 as bathroom$/, async function() {
    await vrbolistpage.inncreaseBathroom(4);
})

When(/^I click on Next button$/, async function() {
    await vrbolistpage.clickNextBttn();
})

Then(/^I verify Step 2 of 3 is displayed$/, async function() {
    await vrbolistpage.isStep2Of3Displayed();
})

Then(/^I verify Where is your property located is displayed$/, async function() {
    await vrbolistpage.isYourPropertyDisplayed();
})

When(/^I enter 121 in address box$/, async function() {
    await vrbolistpage.enterAddress();
})

When(/^I select 1211 6th Avenue, New York, NY, USA from auto-suggestion$/, async function() {
    await vrbolistpage.selectingFromAutoSuggest();
    await browser.pause(2000)
})

Then(/^I verify graph is displayed$/, async function() {
    await vrbolistpage.isMapDisplayed();
})

Then(/^I verify pin in graph is displayed$/, async function() {
    await vrbolistpage.isPinDisplayed();
})

Then(/^I verify Move the pin to adjust the location of your property is displayed below graph$/, async function() {
    await vrbolistpage.isTextBelowMapDisplayed();
})
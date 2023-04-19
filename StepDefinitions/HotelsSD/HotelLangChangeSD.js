const { When, Then, Given } = require("@wdio/cucumber-framework");
const HotelHomePage = require("../../Pages/Hotels/HotelHomePage");


const hotelhome = new HotelHomePage();

Given(/^I am on hotels homepage$/, async function() {
    await browser.url('/');
    await browser.pause(1000);
});

When(/^I click on English language$/, async function() {
    await hotelhome.clickEnglishLang();
})

When(/^I select Español Estados Unidos in Language dropdown$/, async function() {
    await hotelhome.selectEspañol()
})

When(/^I click on Save button$/, async function() {
    await hotelhome.clickSaveBttn();
})

Then(/^I verify Español is displayed$/, async function() {
    await hotelhome.isEspañolLangDisplayed();
})

When(/^I click on Español language$/, async function() {
    await hotelhome.clickEspañolLang();
})

When(/^I select English United States in Language dropdown$/, async function() {
    await hotelhome.selectEnglish();
})

When(/^I click on Guardar button$/, async function() {
    await hotelhome.clickGuardarBttn();
})

Then(/^I verify English is displayed$/, async function() {
    await hotelhome.isEnglishLangDisplayed();
})
const { expect } = require("chai");

class VrboListPropPage {


    //Locators of webElements
step1Of2Locator = 'div=Step 1 of 3';
howMuchYouCanEarnLocator = 'h1=See how much you could earn!';
increaseBedroomsLocator = '//button[@aria-label="Increase bedrooms"]';
increaseBathroomsLocator = '//button[@aria-label="Increase bathrooms"]';
nextBttnLocator = '#propertyInfoNextBtn';
step2Of3Locator = 'div=Step 2 of 3';
yourPropertyLocator = 'h1=Where is your property located?';
enteraddressLocator = '//input[@placeholder="Enter address..."]';
addressArrayLocator = '//li[@role="menuitem"]';
mapLocator = '//div[@aria-label="Map"]';
pinLocator = '//span[starts-with(text(),"To navigate")]/following-sibling::div';
textBelowMapLocator = '//span[contains(text(), "the pin to adjust")]';


//Functions to interact with webElements

async isStep1Of2Displayed() {
    const isStep1Of2Displayed = await $(this.step1Of2Locator);
    return isStep1Of2Displayed.isDisplayed();
    expect(isStep1Of2Displayed, 'Step 1 of 2 is NOT displayed').to.be.true;
}

async isHowMuchYouDisplayed() {
    const isHowMuchYouDisplayed = await $(this.howMuchYouCanEarnLocator);
    return isHowMuchYouDisplayed.isDisplayed();
    expect(isHowMuchYouDisplayed, 'See how much you could earn! is NOT displayed').to.be.true;
}

async increaseBedrooms(numOfRooms) {
    const increaseBedRms = await $(this.increaseBedroomsLocator);
    for (let i = 1; i < numOfRooms; i++) {
        await increaseBedRms.click();
        await browser.pause(1000);
    }
}

async inncreaseBathroom(numOfBathrooms) {
    const increaseBathRms = await $(this.increaseBathroomsLocator);
    for (let i = 1; i < numOfBathrooms; i++) {
        await increaseBathRms.click();
        await browser.pause(1000);
    }
}

async clickNextBttn() {
    const nextBttn = await $(this.nextBttnLocator);
    await nextBttn.click();
    await browser.pause(2000);
}

async isStep2Of3Displayed() {
    const isStep2Of3Displayed = await $(this.step2Of3Locator);
    return isStep2Of3Displayed.isDisplayed();
    expect(isStep2Of3Displayed, 'Step 2 of 3 is NOT displayed').to.be.true;
    await browser.pause(1000);
}

async isYourPropertyDisplayed() {
    const isYourPropertyDisplayed = await $(this.yourPropertyLocator);
    return isYourPropertyDisplayed.isDisplayed();
    expect(isYourPropertyDisplayed, 'Where is your property located? is NOT displayed').to.be.true;
    await browser.pause(1000);
}

async enterAddress() {
    const addressBox = await $(this.enteraddressLocator);
    await addressBox.setValue('121');
    await browser.pause(2000);
}

async selectingFromAutoSuggest() {
    const allAddresses = await $$(this.addressArrayLocator);
    for (const address of allAddresses) {
        const text = await address.getText();
        if(text.toString().localeCompare('1211 6th Avenue, New York, NY, USA') === 0) {
            await address.click();
            break;
        }
    }
}

async isMapDisplayed() {
    const isMapDisplayed = await $(this.mapLocator);
    return isMapDisplayed.isDisplayed();
    expect(isMapDisplayed, 'Map Graph is NOT displaying').to.be.true;
}

async isPinDisplayed() {
    const isPinDisplayed = await $(this.pinLocator);
    return isPinDisplayed.isDisplayed();
    expect(isPinDisplayed, 'Pin is NOT displayed').to.be.true;
}

async isTextBelowMapDisplayed() {
    const isTextBelowMapDisplayed = await $(this.textBelowMapLocator);
    await isTextBelowMapDisplayed.scrollIntoView(false);
    await browser.pause(1000);
    const result = await isTextBelowMapDisplayed.isDisplayed();
    expect(result, 'Text below map is NOT displayed').to.be.true;
    return result;
}
}
module.exports = VrboListPropPage;
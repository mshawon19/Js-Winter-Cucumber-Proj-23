const { expect } = require("chai");

class HotelHomePage {

//Locators of webElements on Homepage
signInLocator = 'button=Sign in';
signUpLocator = "a=Sign up, it's free";
travelersboxLocator = '//button[@data-stid="open-room-picker"]';
addAdultsBttnLocator = '//input[contains(@aria-label, "Adu")]/following-sibling::button';
addChildLocator = '//input[contains(@aria-label, "Children Ages")]/following-sibling::button';
child1Locator = '//label[text()="Child 1 age"]/following-sibling::select';
child2Locator = '//label[text()="Child 2 age"]/following-sibling::select';
child3Locator = '//label[text()="Child 3 age"]/following-sibling::select';
child4Locator = '//label[text()="Child 4 age"]/following-sibling::select';
child5Locator = '//label[text()="Child 5 age"]/following-sibling::select';
child6Locator = '//label[text()="Child 6 age"]/following-sibling::select';
traverlers9Locator = 'button=9 travelers, 1 room';
FeedbackBttnLocator = 'a=Feedback';
doneBttnLocator = '//button[text()="Done"]';
removeChildLocator = '//input[contains(@aria-label, "Children Ages")]/preceding-sibling::button';
enlishLangLocator = 'div=English';
languageBoxLocator = '//label[text()="Language"]/following-sibling::select';
saveBttnLocator = 'button=Save';
españolLangLocator = 'div=Español';
languageBoxLocator2 = '//label[text()="Idioma"]/following-sibling::select';
guardarBttnLocator = 'button=Guardar';
listYourPropertyLocator = 'div=List your property';
likeToListLocator = 'p=What would you like to list?';
lodgingLocator = 'p=Lodging';
privateResidenceLocator = 'p=Private residence';

//Functions to interact with webElements on Homepage
async clickSignInBttn() {
    const signInBttn = await $(this.signInLocator);
    await signInBttn.click();
}

async clickSignUpBttn() {
    const signUpBttn = await $(this.signUpLocator);
    await signUpBttn.click();
}

async clickTravelersBox() {
    const traverlsBox = await $(this.travelersboxLocator);
    await traverlsBox.waitForDisplayed(); // or waitForEnabled();
    await traverlsBox.click();
    }

async add6Adults() {
    const addAdults = await $(this.addAdultsBttnLocator);
    await addAdults.click();  //3
    await browser.pause(1000);
    await addAdults.click();  //4
    await browser.pause(1000);
    await addAdults.click();  //5
    await browser.pause(1000);
    await addAdults.click();  //6
    await browser.pause(1000);
}

async add3Children() {
    const addChildren = await $(this.addChildLocator);
    await addChildren.click(); //1
    await browser.pause(1000); 
    await addChildren.click(); //2
    await browser.pause(1000);
    await addChildren.click(); //3
    await browser.pause(1000)
}

async selectingAge4C1() {
    const child1DropDown = await $(this.child1Locator);
    await child1DropDown.selectByIndex(5);
}

async selectingAgeUnder0C2() {
    const child2DropDown = await $(this.child2Locator);
    await child2DropDown.selectByIndex(1);
}

//8
async selectingAge7C3() {
    const child3DropDown = await $(this.child3Locator);
    await child3DropDown.selectByIndex(8)
}

async clickDoneBttn() {
    const doneBttn = await $(this.doneBttnLocator);
    await doneBttn.click();
}

async is9TravelersDisplayed() {
    const travelers9 = await $(this.traverlers9Locator);
    return travelers9.isDisplayed();
}

async clickFeedBaackBttn() {;
    const feedBackBttn = await $(this.FeedbackBttnLocator);
    await feedBackBttn.click();
}

async add2Children() {
    const add2 = await $(this.addChildLocator);
    await add2.click(); //1
    await browser.pause(1000);
    await add2.click(); //2
}

async isChild1DropDownDiplayed() {
    const child1DropDown = await $(this.child1Locator);
    return child1DropDown.isDisplayed();
}

async isChild2DropDownDiplayed() {
    const child2DropDown = await $(this.child2Locator);
    return child2DropDown.isDisplayed();
}

async isChild3DropDownDiplayed() {
    const child3DropDown = await $(this.child3Locator);
    return child3DropDown.isDisplayed();
    
}

async isChild4DropDownDiplayed() {
    const child4DropDown = await $(this.child4Locator);
    return child4DropDown.isDisplayed();
}

async isChild5DropDownDiplayed() {
    const child5DropDown = await $(this.child5Locator);
    return child5DropDown.isDisplayed();
}

async isChild6DropDownDiplayed() {
    const child6DropDown = await $(this.child6Locator);
    return child6DropDown.isDisplayed();
}

async isAddChildBttnEnabled() {
    const addChildBttn = await $(this.addChildLocator);
    return addChildBttn.isEnabled();
}

async isRemoveChildBttnEnabled() {
    const removeChildBttn = await $(this.removeChildLocator);
    return removeChildBttn.isEnabled();
}

async selectEspañol() {
    const langDropDown = await $(this.languageBoxLocator);
    await langDropDown.selectByIndex(1);
    await browser.pause(2000);
}

async selectEnglish() {
    const langDropDown = await $(this.languageBoxLocator2);
    await langDropDown.selectByIndex(0);
    await browser.pause(2000);
}

async clickEnglishLang() {
    const clickEnglish = await $(this.enlishLangLocator);
    await clickEnglish.click();
    await browser.pause(2000);
}

async clickSaveBttn() {
    const saveBttn = await $(this.saveBttnLocator);
    await saveBttn.click();
    await browser.pause(2000);
}

async clickGuardarBttn() {
    const guardarBttn = await $(this.guardarBttnLocator);
    await guardarBttn.click();
    await browser.pause(2000);
}
async isEspañolLangDisplayed() {
    const isEspañolLangDisplaying = await $(this.españolLangLocator);
    return isEspañolLangDisplaying.isDisplayed()
    expect(isEspañolLangDisplaying, 'Español is NOT displayed').to.be.true;
}

async isEnglishLangDisplayed() {
    const isEnglishLangDisplaying = await $(this.enlishLangLocator);
    return isEnglishLangDisplaying.isDisplayed()
    expect(isEnglishLangDisplaying, 'English is NOT displayed').to.be.true;
}
async clickEspañolLang() {
    const clickEspañol = await $(this.españolLangLocator);
    await clickEspañol.click();
    await browser.pause(2000);
}

async clickListYourProperty() {
    const listYourProperty = await $(this.listYourPropertyLocator);
    await listYourProperty.click();
    await browser.pause(2000);
}

async switchingToPropertyHandle() {
    const connectedHandle =await browser.getWindowHandle();

    const allHandles = await browser.getWindowHandles();
    for (const handle of allHandles) {
        await browser.switchToWindow(handle);
        const currentUrl = await browser.getUrl();
        console.log(`current url -> ${currentUrl}\n\n`);
        if (currentUrl.localeCompare('https://apps.expediapartnercentral.com/en_US/list?utm_medium=referral&utm_source=HCOM_US-en_US&utm_campaign=HomePage&utm_contentewd=pwa-header-btn&siteId=300000001&tpid=3001&eapid=1&langId=1033') === 0) {
            return handle;
        }
    }
}

async isTextDisplayed() {
    const isLikeToListDisplayed = await $(this.likeToListLocator);
    return isLikeToListDisplayed.isDisplayed();
    expect(isLikeToListDisplayed, 'What would you like to list? is NOT displayed').to.be.true;
}

async isLodgingDispalyed() {
    const isLodgingDisplayed = await $(this.lodgingLocator);
    return isLodgingDisplayed.isDisplayed();
    expect(isLodgingDisplayed, 'Lodging is NOT displayed').to.be.true;
}

async isPrivateResDisplayed() {
    const isPrivateResDisplayed = await $(this.privateResidenceLocator);
    return isPrivateResDisplayed.isDisplayed();
    expect(isPrivateResDisplayed, 'Private Residence is NOT displayed').to.be.true;
}

async clickPrivateRes() {
    const privateRes = await $(this.privateResidenceLocator);
    await privateRes.click();
    await browser.pause(2000);
}

// trying to implement for loop so don't have to keep writing the addChild.click()
async addChildren(numOfChildren) {
    const addChildBttn = await $(this.addChildLocator);
    for (let i = 0; i < numOfChildren; i++) {
        await addChildBttn.click();
        await browser.pause(1000);
    }
}

async removeChild(numOfChildren) {
    const removeChildBttn = await $(this.removeChildLocator);
    for (let i = 0; i < numOfChildren; i++) {
        await removeChildBttn.click();
        await browser.pause(1000);
    }
}



}

module.exports = HotelHomePage;

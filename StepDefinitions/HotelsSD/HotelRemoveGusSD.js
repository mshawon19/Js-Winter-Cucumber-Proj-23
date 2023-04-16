const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const HotelHomePage = require("../../Pages/Hotels/HotelHomePage");

const hotelhomepage = new HotelHomePage();

When(/^I am on hotels homepage$/, async function() {
    await browser.url('/');
    await browser.pause(1000);
})

When(/^I click on Travelers$/, async function() {
    await hotelhomepage.clickTravelersBox();
})

When(/^I select “Children” as 2$/, async function() {
    await hotelhomepage.addChildren(2);
})

Then(/^I verify Children-age dropdown are 2$/, async function() {
    const isChild1DropDownDiplaying = await hotelhomepage.isChild1DropDownDiplayed();
    const isChild2DropDownDiplaying = await hotelhomepage.isChild2DropDownDiplayed();

    expect(isChild1DropDownDiplaying, 'Child 1 drop-down is NOT diplaying').to.be.true;
    expect(isChild2DropDownDiplaying, 'Child 2 drop-down is NOT displaying').to.be.true;
})

Then(/^I verify Plus-button is enabled$/, async function() {
    const isAddChildBttnEnable = await hotelhomepage.isAddChildBttnEnabled();
    expect(isAddChildBttnEnable, 'Plus-button is NOT enabled').to.be.true;
})

Then(/^I verify minus-button is enabled$/, async function() {
    const isRemoveChildBttnEnable = await hotelhomepage.isRemoveChildBttnEnabled();
    expect(isRemoveChildBttnEnable, 'Minus-button is NOT enabled').to.be.true;
})

//2 children are already added so just need to add 4 more
When(/^I select “Children” as 6$/, async function() {
    await hotelhomepage.addChildren(4);
    await browser.pause(2000);
})

Then(/^I verify Children-age dropdown are 6$/, async function() {
    const isChild1DropDownDiplaying = await hotelhomepage.isChild1DropDownDiplayed();
    const isChild2DropDownDiplaying = await hotelhomepage.isChild2DropDownDiplayed();
    const isChild3DropDownDiplaying = await hotelhomepage.isChild3DropDownDiplayed();
    const isChild4DropDownDiplaying = await hotelhomepage.isChild4DropDownDiplayed();
    const isChild5DropDownDiplaying = await hotelhomepage.isChild5DropDownDiplayed();
    const isChild6DropDownDiplaying = await hotelhomepage.isChild6DropDownDiplayed();

    expect(isChild1DropDownDiplaying, 'Child 1 drop-down is NOT diplaying').to.be.true;
    expect(isChild2DropDownDiplaying, 'Child 2 drop-down is NOT displaying').to.be.true;
    expect(isChild3DropDownDiplaying, 'Child 3 drop-down is NOT diplaying').to.be.true;
    expect(isChild4DropDownDiplaying, 'Child 4 drop-down is NOT diplaying').to.be.true;
    expect(isChild5DropDownDiplaying, 'Child 5 drop-down is NOT diplaying').to.be.true;
    expect(isChild6DropDownDiplaying, 'Child 5 drop-down is NOT diplaying').to.be.true;
    await browser.pause(2000);
})

Then(/^I verify Plus button is disabled$/, async function() {
    const isAddChildBttnEnable = await hotelhomepage.isAddChildBttnEnabled();
    expect(isAddChildBttnEnable, 'Plus button IS enabled').to.be.false;
})

Then(/^I verify minus button is enabled$/, async function() {
    const isRemoveChildBttnEnable = await hotelhomepage.isRemoveChildBttnEnabled();
    expect(isRemoveChildBttnEnable, 'Minus button is NOT enabled').to.be.true;
})

When(/^I select “Children” as 5$/, async function() {
    await hotelhomepage.removeChild(1);
    await browser.pause(2000);
})

Then(/^I verify Children-age dropdown are 5$/, async function() {
    const isChild1DropDownDiplaying = await hotelhomepage.isChild1DropDownDiplayed();
    const isChild2DropDownDiplaying = await hotelhomepage.isChild2DropDownDiplayed();
    const isChild3DropDownDiplaying = await hotelhomepage.isChild3DropDownDiplayed();
    const isChild4DropDownDiplaying = await hotelhomepage.isChild4DropDownDiplayed();
    const isChild5DropDownDiplaying = await hotelhomepage.isChild5DropDownDiplayed();

    expect(isChild1DropDownDiplaying, 'Child 1 drop-down is NOT diplaying').to.be.true;
    expect(isChild2DropDownDiplaying, 'Child 2 drop-down is NOT displaying').to.be.true;
    expect(isChild3DropDownDiplaying, 'Child 3 drop-down is NOT diplaying').to.be.true;
    expect(isChild4DropDownDiplaying, 'Child 4 drop-down is NOT diplaying').to.be.true;
    expect(isChild5DropDownDiplaying, 'Child 5 drop-down is NOT diplaying').to.be.true;
    await browser.pause(1000);
})

Then(/^I verify Plus button is enabled$/, async function() {
    const isAddChildBttnEnable = await hotelhomepage.isAddChildBttnEnabled();
    expect(isAddChildBttnEnable, 'Plus-button is NOT enabled').to.be.true;
})

Then(/^I verify Minus Button is enabled$/, async function() {
    const isRemoveChildBttnEnable = await hotelhomepage.isRemoveChildBttnEnabled();
    expect(isRemoveChildBttnEnable, 'Minus Button is NOT enabled').to.be.true;
})

When(/^I select “Children” as 0$/, async function() {
    await hotelhomepage.removeChild(5);
    await browser.pause(2000);
})

Then(/I verify Children-age dropdown is NOT displayed$/, async function() {
    const isChild1DropDownDiplaying = await hotelhomepage.isChild1DropDownDiplayed();
    expect(isChild1DropDownDiplaying, 'Child-age drop down IS displaying').to.be.false;
})

Then(/^I verify plus Button is enabled$/, async function() {
    const isAddChildBttnEnable = await hotelhomepage.isAddChildBttnEnabled();
    expect(isAddChildBttnEnable, 'Plus-button is NOT enabled').to.be.true;
})

Then(/^I verify Minus button is disabled$/, async function () {
    const isRemoveChildBttnEnable = await hotelhomepage.isRemoveChildBttnEnabled();
    expect(isRemoveChildBttnEnable, 'Minus Button IS enabled').to.be.false;
})
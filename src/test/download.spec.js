describe('Eli Lilly - Lilly Plus Form', async () => {
    it('should download documents on iOS Safari', async () => {
        await browser.url("https://www.iv.together.lilly/?brandProgram=miri&indication=uc&cc-app-name=lillyplus&cc-app-version=12.0.0&cc-app-instance-id=152fefc8f22307f0&cc-app-device=iPhone10,2&cc-app-device-os=ios&cc-app-device-os-version=33.0.0&cc-app-device-manufacturer=Apple&mmnNumber=SPEC-229643&source=ltapp");

        await $("#firstName").setValue("test");
        await $("#lastName").setValue("test");
        await $("#dateOfBirth").setValue("12-02-1985");
        await $("//input[@id='react-select-2-input']").setValue("Male\n");
        await $("#emailAddress").setValue("test@gmail.com");
        await $("#confirmEmailAddress").setValue("test@gmail.com");
        await $("#ageAndResidency").click();
        await $("#patient-info-continue").click();

        await $("#researchConsent").click();
        await $("#undefined-continue").click();

        await $("#newly-prescribed").click();
        await $("#patient-journey-continue").click();

        await browser.pause(5000);

        await $("#isSavingsProgramRequested").click();
        await $("#isNotEnrolledWithGovernment").click();
        await $("#support-type-selection-continue").click();

        await browser.pause(5000);

        await $("//input[@role='combobox']").setValue("123");
        await $("#address-typeahead-item-0").click();
        await $("#phoneNumber").setValue("123-456-7890");
        await $("#react-select-5-input").setValue("Mobile\n");
        await $("#contact-info-continue").click();

        await browser.pause(5000);

        await $("#prescriberFirstName").setValue("test");
        await $("#prescriberLastName").setValue("test");
        await $("#prescriberPracticeName").setValue("test");
        await $("//input[@role='combobox']").setValue("123");
        await $("#address-typeahead-item-0").click();
        await $("#prescriberPhoneNumber").setValue("123-456-7890");
        await $("#physician-contact-info-continue").click();

        await $("#prescription-insurance-continue").click();

        await browser.pause(5000);

        await browser.waitUntil(async function () {
            return (await $("//span[@class='jss45']//*[name()='svg']").isDisplayed())
            }, 
            {
                timeout: 20000,
                timeoutMsg: 'expected text to be different after 20s'
            })
        await $("//span[@class='jss45']//*[name()='svg']").click();
        await $("//a[normalize-space()='Download documents']").click();

        const { width, height } = await browser.getWindowSize();
        const xClick = (width / 100) * 82;
        const yClick = height / 2;

        console.log("Width: ", width);
        console.log("Height: ", height);

        await browser.touchAction({
            action: 'tap',
            x:xClick,
            y:yClick
        })
    })
})
  
  
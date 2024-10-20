let runScripts = async () => {
    let checkAuth = await scriptCreate("Authorization Checking Script", "./Assets/javascript/views/auth.js", 10);
    let header = await scriptCreate("Header Script", "./Assets/javascript/views/header.js", 20);
    let main = await scriptCreate("main Script", "./Assets/javascript/views/main.js", 30);
    let validationClass = await scriptCreate("Validation Class Script", "./Assets/javascript/models/Validation.js", 40);
    let userClass = await scriptCreate("User class Script", "./Assets/javascript/models/User.js", 50);
    let adminClass = await scriptCreate("Admin class Script", "./Assets/javascript/models/Admin.js", 60);
    let formImgInputScript = await scriptCreate("From Image Input Script", "./Assets/javascript/views/form/fromImageInput.js", 70);
    let formImgUploadScript = await scriptCreate("From Image Upload Script", "./Assets/javascript/views/form/imageUpload.js", 80);
    let formTextInputScript = await scriptCreate("From Text Input Script", "./Assets/javascript/views/form/formTextInput.js", 90);
    let formUserPrivilege = await scriptCreate("From Text Input Script", "./Assets/javascript/views/form/userPrivilege.js", 100);
    let formButtonsScript = await scriptCreate('Form Buttons', './Assets/javascript/views/form/formButtons.js', 90);
    let charLimitScript = await scriptCreate('Characters Check Limit Script', './Assets//javascript/views/form/charLimit.js', 100);
    let recordButtonScript = await scriptCreate('Record Buttons Script', './Assets/javascript/views/recordButtons.js', 105);
    let profilesDataDisplay = await scriptCreate('Profiles Data Display', './Assets/javascript/views/dataDisplay/profilesDataDisplay.js', 110);
    let modalScript = await scriptCreate('Modal Script', './Assets/javascript/views/modal.js', 110);
    let refreshRecordScript = await scriptCreate('Refresh Record Script', './Assets/javascript/views/refreshRecords.js', 120);
    let elementReferencesScript = await scriptCreate('HTML element reference', './Assets/javascript/views/elementReferences.js', 130);
    let rowRecordScript = await scriptCreate('Each Row of record', './Assets/javascript/views/dataDisplay/rowRecord.js', 140);
    let errorMessagesScript = await scriptCreate('Error Messages Script', './Assets/javascript/views/form/errorMessages.js', 150);
    let formResetScript = await scriptCreate('form reset to default', './Assets/javascript/views/form/formReset.js', 160);
    let fromValidationScript = await scriptCreate('Form Validation', './Assets/javascript/controllers/formValidation.js', 175);
    let homePageScript = await scriptCreate('Home Page script', './Assets/javascript/homePage.js', 190);
    let footerScript = await scriptCreate('Footer Script', './Assets/javascript/views/footer.js', 200);

    return [checkAuth, header, main, validationClass, userClass, adminClass, formImgInputScript, formImgUploadScript, formTextInputScript, formUserPrivilege, formButtonsScript, charLimitScript, recordButtonScript, profilesDataDisplay, modalScript, refreshRecordScript, elementReferencesScript, rowRecordScript, errorMessagesScript, formResetScript, fromValidationScript, homePageScript, footerScript];
};
runScripts().then(val => console.log(val)).catch(err => console.log(err));
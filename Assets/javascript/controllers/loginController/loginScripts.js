let runScripts = async () => {
    let validationLogin = await scriptCreate("Validation Login Class Script", "./Assets/javascript/models/ValidationLogin.js", 25);
    let UserClass = await scriptCreate("User class Script", "./Assets/javascript/models/User.js", 30);
    let AdminClass = await scriptCreate("Admin Class Script", "./Assets/javascript/models/Admin.js", 30);
    let loginPageUI = await scriptCreate("Login page UI script", "./Assets/javascript/views/loginPage/loginPageDisplay.js", 40);
    let errorMessageCont = await scriptCreate("Error Message Container and Array Script", "./Assets/javascript/views/errorContainers.js", 50);
    let errorMessage = await scriptCreate("Error Messages Script", "./Assets/javascript/views/form/errorMessages.js", 60);
    let loginValidationHandler = await scriptCreate("Login Validation", "./Assets/javascript/controllers/loginController/loginValidation.js", 70);
    let scriptsArray = [validationLogin, UserClass, AdminClass, loginPageUI, errorMessageCont, errorMessage, loginValidationHandler]
    return scriptsArray;
};
runScripts().then(val => console.log(val)).catch(err => console.log(err));
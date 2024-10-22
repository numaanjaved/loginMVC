let runScripts = async () => {
    let validationLogin = await scriptCreate("Validation Login Class Script", "./Assets/javascript/models/ValidationLogin.js", 10);
    let login = await scriptCreate("login script", "./Assets/javascript/controllers/loginController/login.js", 15);
    let UserClass = await scriptCreate("User class Script", "./Assets/javascript/models/User.js", 20);
    let AdminClass = await scriptCreate("Admin Class Script", "./Assets/javascript/models/Admin.js", 25);
    let loginPageUI = await scriptCreate("Login page UI script", "./Assets/javascript/views/loginView/loginPageDisplay.js", 30);
    let errorMessageCont = await scriptCreate("Error Message Container and Array Script", "./Assets/javascript/views/loginView/errorContainers.js", 35);
    let errorMessage = await scriptCreate("Error Messages Script", "./Assets/javascript/views/form/errorMessages.js", 40);
    let loginValidationHandler = await scriptCreate("Login Validation", "./Assets/javascript/controllers/loginController/validation.js", 45);
    let scriptsArray = [validationLogin, login, UserClass, AdminClass, loginPageUI, errorMessageCont, errorMessage, loginValidationHandler]
    return scriptsArray;
};
runScripts().then(val => console.log(val)).catch(err => console.log(err));
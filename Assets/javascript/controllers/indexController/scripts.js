let runScripts = async () => {
    let checkAuth = await scriptCreate("Authorization Checking Script", "./Assets/javascript/controllers/indexController/auth.js", 5);
    let UserClass = await scriptCreate("User class Script", "./Assets/javascript/models/User.js", 5);
    let adminClassScript = await scriptCreate("Admin Class Script", "./Assets/javascript/models/Admin.js", 5);
    let validationClass = await scriptCreate("Validation Class Script", "./Assets/javascript/models/Validation.js", 5);
    let MessagesCont = await scriptCreate("Error Message Container and Array Script", "./Assets/javascript/views/loginView/errorContainers.js", 5);
    let createAdmin = await scriptCreate("create Admin Script", "./Assets/javascript/controllers/indexController/create.js", 5)
    return [checkAuth, UserClass, adminClassScript, validationClass, MessagesCont, createAdmin];
}
runScripts().then(val => console.log(val)).catch(err => console.log(err));
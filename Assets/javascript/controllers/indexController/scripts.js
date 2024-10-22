let runScripts = async () => {
    let checkAuth = await scriptCreate("Authorization Checking Script", "./Assets/javascript/controllers/indexController/auth.js", 0);
    let createAdmin = await scriptCreate("create Admin Script", "./Assets/javascript/controllers/indexController/create.js", 0)
    return [checkAuth, createAdmin];
}
runScripts().then(val => console.log(val)).catch(err => console.log(err));
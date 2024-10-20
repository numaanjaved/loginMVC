let runScripts = async () => {
    let checkAuth = await scriptCreate("Authorization Checking Script", "./Assets/javascript/views/auth.js", 10);
    return checkAuth;
}
runScripts().then(val => console.log(val)).catch(err => console.log(err));
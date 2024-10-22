let indexScript = async () => {
    let script = await scriptCreate("index Scripts", "./Assets/javascript/controllers/indexController/scripts.js", 0);
    return script;
}

indexScript().then(() => {
    runScripts().then(() => {
        if (loggedInUser()) {
            window.location.href = "/home.html";
        } else {
            window.location.href = "/login.html";
        }
    });
}).catch(err => console.log(err));

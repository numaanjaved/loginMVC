let indexScript = async () => {
    let script = await scriptCreate("index Scripts", "./Assets/javascript/controllers/indexController/scripts.js", 0);
    return script;
}
indexScript().then(val => console.log(val)).catch(err => console.log(err));
setTimeout(() => {
    if (loggedInUser()) {
        window.location.href = "/home.html";
    } else { window.location.href = "/login.html"; }
}, 150);
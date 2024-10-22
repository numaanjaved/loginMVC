let indexScript = async () => {
    let script = await scriptCreate("index Scripts", "./Assets/javascript/controllers/indexController/scripts.js", 0);
    return script;
}
indexScript().then(val => console.log(val)).catch(err => console.log(err));
window.addEventListener('load', () => {
    if (loggedInUser()) {
        window.location.href = "/home.html";
    } else { window.location.href = "/login.html"; }
});
let indexScript = async () => {
    let script = await scriptCreate("index Script", "./Assets/javascript/controllers/loginController/scripts.js", 0);
    return script;
}
indexScript().then(val => console.log(val)).catch(err => console.log(err));
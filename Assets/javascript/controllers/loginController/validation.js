let loginForm = document.querySelector(`.login_form`);
let adminAcc = new Admin()
let loginFromReset = () => { loginForm.reset(); };
let loginValidation = () => {
    let validationCheck = true;
    if (!adminAcc.checkNull(loginUserName, loginUserPassword)) {
        validationCheck = false;
        loginNullMsg(loginUserName, validationCheck);
    } else {
        if (!adminAcc.invalidLogin(loginUserName, loginUserPassword)) {
            validationCheck = false;
            invalidLoginMsg(loginUserName, validationCheck);
        }
    }
    if (validationCheck) {
        return true;
    }
    loginFromReset();
}
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    redirect();
});
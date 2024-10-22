let loginForm = document.querySelector(`.login_form`);
let adminAcc = new Admin()
let loginFromReset = () => { loginForm.reset(); };
let loginValidation = () => {
    let validationCheck = true;
    if (!adminAcc.CheckValidation(loginUserName, loginUserPassword)) { validationCheck = false };
    if (validationCheck) {
        return true;
    }
    loginFromReset();
}
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    redirect();
});
let loginForm = document.querySelector(`.login_form`);
let adminAcc = new Admin();
let LS = JSON.parse(localStorage.getItem('DataArray'));
let existingAdmin = LS.find(userObj => userObj.userType === "Admin");
if (!existingAdmin) {
    usersDataArray.push(adminAcc);
    localStorage.setItem('DataArray', JSON.stringify(usersDataArray));
}
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
let adminAcc = new Admin();
let loginForm = document.querySelector(`.login_form`);
let LS = JSON.parse(localStorage.getItem('DataArray'));
let existingAdmin = LS.find(userObj => userObj.userType === "Admin");
if (!existingAdmin) {
    usersDataArray.push(adminAcc);
    localStorage.setItem('DataArray', JSON.stringify(usersDataArray));
}
let setCookie = (cookieName, cookieValue, expTime) => {
    let expire = new Date();
    expire.setTime(expire.getTime() + (expTime * 60 * 1000));
    let expireTimeUTC = expire.toUTCString();
    document.cookie = `${cookieName}=${encodeURIComponent(cookieValue)};expires=${expireTimeUTC};path=/`;
};

let loginFromReset = () => { loginForm.reset(); };
let loginValidation = () => {
    let validationCheck = true;
    if (!adminAcc.CheckValidation(loginUserName, loginUserPassword)) { validationCheck = false };
    if (validationCheck) {
        let userNameValue = document.getElementById("login_userName").value;
        setCookie("userLoggedIn", userNameValue, 5);
        window.location.href = "/index.html"
    }
    loginFromReset();
}
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    loginValidation();
});
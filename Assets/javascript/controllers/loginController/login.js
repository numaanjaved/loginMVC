let setCookie = (cookieName, cookieValue, expTime) => {
    let expire = new Date();
    expire.setTime(expire.getTime() + (expTime * 60 * 1000));
    let expireTimeUTC = expire.toUTCString();
    document.cookie = `${cookieName}=${encodeURIComponent(cookieValue)};expires=${expireTimeUTC};path=/`;
};
let redirect = () => {
    if (loginValidation()) {
        let userNameValue = document.getElementById("login_userName").value;
        setCookie("userLoggedIn", userNameValue, 5);
        window.location.href = "/index.html";
    }
};
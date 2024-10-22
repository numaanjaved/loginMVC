let getCookie = (cookieName) => {
    let cookieString = `${cookieName}=`;
    let decodedCookies = decodeURIComponent(document.cookie);
    let cookiesArray = decodedCookies.split(';');
    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i].trim();
        if (cookie.indexOf(cookieString) === 0) {
            return cookie.substring(cookieString.length, cookie.length);
        }
    }
    return "";
};
let loggedInUser = () => { return document.cookie.includes("userLoggedIn") ? true : false; };
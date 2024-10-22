class LoginValidation {
    userName;
    userPassword;
    setUserName(uName) { this.userName = uName; }
    getUserName() { return this.userName; }
    setUserPassword(uPassword) { this.userPassword = uPassword; }
    getUserPassword() { return this.userPassword; }
    isNull(userName, userPass) {
        let nullCheck = true;
        if (userName.value === "" || userName.value === null) { nullCheck = false; }
        if (userPass.value === "" || userPass.value === null) { nullCheck = false; }
        return nullCheck;
    }
    usernameValidation(userName, admin) {
        let userNameCheck = true;
        if (userName.value != admin.adminName) { userNameCheck = false; }
        return userNameCheck;
    }
    userPasswordValidation(userPassAttr, admin) {
        let passwordCheck = true;
        if (userPassAttr.value != admin.password) { passwordCheck = false; }
        return passwordCheck;
    }
    invalidLogin(userName, userPass) {
        let LS = JSON.parse(localStorage.getItem('DataArray'));
        let adminObj = LS.find(userData => userData.password);
        let MatchCheck = true;
        if (!this.usernameValidation(userName, adminObj)) { MatchCheck = false; }
        if (!this.userPasswordValidation(userPass, adminObj)) { MatchCheck = false; }
        return MatchCheck;
    }
};
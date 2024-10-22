class Validation {
    #attribute;
    #regex;
    #len;
    setAttribute(attr) { this.#attribute = attr; };
    getAttribute() { return this.#attribute; };
    setRegex(reg) { this.#regex = reg; };
    getRegex() { return this.#regex; };
    setLength(length) { this.#len = length; };
    getLength() { return this.#len; };
    isNull(attribute) {
        this.setAttribute(attribute);
        let check = true;
        if (attribute.value == "" || attribute == null) { check = false; } else {
            successMsg(this.getAttribute());
        }
        return check;
    };
    matchRegex(attribute, regexSyn) {
        this.setAttribute(attribute);
        this.setRegex(regexSyn);
        let check = true
        if (!attribute.value.match(regexSyn)) {
            check = false;
        } else {
            successMsg(this.getAttribute());
        }
        return check;
    };
    checkLength(attribute, maxLen) {
        this.setAttribute(attribute);
        this.setLength(maxLen)
        let check = true;
        if (attribute.value.length > this.getLength()) { check = false; } else {
            successMsg(this.getAttribute());
        }
        return check;
    };
    profilePicValidation(attribute) {
        this.setAttribute(attribute);
        this.getAttribute();
        let imgCheck = true;
        if (!this.getAttribute().files.length || imgDisplay.src.includes("default_profile.png")) { imgCheck = false; } else {
            successMsg(attribute);
            imgCheck = true;
        }
        return imgCheck;
    };
    createUser(userDataArr) {
        successMsg(selectUserType);
        if (userIndexCheck === null) {
            let userDataObj = new User();
            userDataObj.create(userDataArr);
            let storedData = localStorage.getItem('DataArray');
            let usersDataArray = [];
            if (storedData) { usersDataArray = JSON.parse(storedData); }
            let existingAcc = usersDataArray.find(existingUser => existingUser.UserID === userDataObj.getID());
            if (existingAcc) { console.log(`Account Already exists`); } else {
                usersDataArray.push(userDataObj);
                localStorage.setItem('DataArray', JSON.stringify(usersDataArray));
            }
        }
    };
    updateUser(userDataArr) {
        if (userIndexCheck !== null) {
            let LS = JSON.parse(localStorage.getItem('DataArray'));
            let currentUser = LS[userIndexCheck];
            let updateUser = new User();
            updateUser.UserID = currentUser.UserID;
            updateUser.userType = currentUser.userType;
            updateUser.update(userDataArr);
            LS[userIndexCheck] = updateUser;
            localStorage.setItem('DataArray', JSON.stringify(LS));
            userIndexCheck = null;
        }
    };
    createAdmin(userDataArr) {
        if (!this.adminExists()) {
            errorMsg(selectUserType, `${error[4].errorName}: ${error[4].errorMessage}`);
        } else {
            let userDataObj = new Admin();
            userDataObj.create(userDataArr);
            console.log(userDataObj);
            if (userIndexCheck === null) {
                let storedData = localStorage.getItem('DataArray');
                let usersDataArray = [];
                if (storedData) { usersDataArray = JSON.parse(storedData); }
                let existingAcc = usersDataArray.find(existingUser => existingUser.UserID === userDataObj.getID());
                if (existingAcc) { console.log(`Account Already exists`); } else {
                    usersDataArray.push(userDataObj);
                    localStorage.setItem('DataArray', JSON.stringify(usersDataArray));
                }
            }
            successMsg(selectUserType);
        }
    };
    updateAdmin(userDataArr) {
        if (userIndexCheck !== null) {
            let LS = JSON.parse(localStorage.getItem('DataArray'));
            let currentAdmin = LS[userIndexCheck];
            let updateAdminData = new Admin();
            updateAdminData.UserID = currentAdmin.UserID;
            updateAdminData.userType = currentAdmin.userType;
            updateAdminData.update(userDataArr);
            LS[userIndexCheck] = updateAdminData;
            localStorage.setItem('DataArray', JSON.stringify(LS));
            userIndexCheck = null;
        }
    };
    adminExists() {
        let storedData = localStorage.getItem('DataArray');
        let usersDataArray = [];
        if (storedData) { usersDataArray = JSON.parse(storedData); }
        let adminAccount = usersDataArray.find(usersData => usersData.userType === "Admin");
        return adminAccount ? false : true;
    }
};
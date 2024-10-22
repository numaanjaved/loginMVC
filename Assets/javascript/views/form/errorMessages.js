let successMsg = (statusMsgElem) => {
    let error = errorContainer[statusMsgElem.name];
    error.innerHTML = "";
    error.style.display = "none";
};
let errorMsg = (statusMsgElem, errorMsg_) => {
    let error = errorContainer[statusMsgElem.name];
    error.style.display = "block";
    error.innerHTML = errorMsg_;
};
let error = [
    { errorName: "Null Error", errorMessage: "Please fill data in the field" },
    { errorName: "Format Error", errorMessage: "Please match the requested format" },
    { errorName: "Limit Exceed", errorMessage: "Characters limit exceeded" },
    { errorName: "No picture", errorMessage: "Please Upload an Image" },
    { errorName: "Admin Exists", errorMessage: "There is already an admin account" },
    { errorName: "Invalid", errorMessage: "Invalid username or password" }
];
let errorContainer = {
    user_Fname: FnameErr,
    user_Lname: LnameErr,
    user_email: emailErr,
    user_contact: contactErr,
    user_address: addressErr,
    user_bio: bioErr,
    admin_name: userNameErr,
    admin_password: userPassErr,
    select_user: userTypeErr,
    login_userName: invalidLoginErr,
    login_userPassword: invalidLoginErr,
    image: image_error_msg
};
let nullMsg = (att, condition) => {
    if (condition === false) {
        errorMsg(att, `${error[0].errorName}: ${error[0].errorMessage}`);
    } else { successMsg(att); }
};
let regexMsg = (att, condition) => {
    if (condition === false) {
        errorMsg(att, `${error[1].errorName}: ${error[1].errorMessage}`);
    } else { successMsg(att); }
};
let lengthMsg = (att, condition) => {
    if (condition === false) {
        errorMsg(att, `${error[2].errorName}: ${error[2].errorMessage}`);
    } else { successMsg(att); }
};
let pictureMsg = (att, condition) => {
    if (condition === false) {
        errorMsg(att, `${error[3].errorName}: ${error[3].errorMessage}`);
    } else { successMsg(att) }
}
let adminMsg = (condition) => {
    if (condition === true) {
        errorMsg(selectUserType, `${error[4].errorName}: ${error[4].errorMessage}`);
    } else { successMsg(selectUserType) }
}
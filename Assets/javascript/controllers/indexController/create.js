let adminAcc = new Admin();
adminAcc.setAdminName(`ahmed_tahiri`);
adminAcc.setPassword(`Ahmed123`);
adminAcc.setFirstName("Ahmed");
adminAcc.setLastName("Tahiri");
adminAcc.setEmail("ahmedtahri@gmail.com");
adminAcc.setContactNum("03335910691");
adminAcc.setAddress("Jail Road Lahore");
adminAcc.setBio("I'm Professional Web developer");
adminAcc.setProfilePic("./Assets/images/image2.jpg");
adminAcc.setUserType("Admin");
adminAcc.setID();
localStorage.setItem('DataArray', JSON.stringify(usersDataArray));
let LS = JSON.parse(localStorage.getItem('DataArray'));
let existingAdmin = LS.find(userObj => userObj.userType === "Admin");
if (!existingAdmin) {
    usersDataArray.push(adminAcc);
    localStorage.setItem('DataArray', JSON.stringify(usersDataArray));
}
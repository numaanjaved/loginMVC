let userIndexCheck = null;
let attributes = [
	{ attrName: userFirstName, regex: /^[a-zA-Z\s]*$/, length: 30 },
	{ attrName: userLastName, regex: /^[a-zA-Z\s]*$/, length: 30 },
	{ attrName: userEmail, regex: /^[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*@[A-Za-z]+\.[A-Za-z]{2,}$/, length: 100 },
	{ attrName: userContactNumber, regex: /^[0-9]{2,}[0-9]{7,}$/, length: 20 },
	{ attrName: userAddress, regex: /^[a-zA-Z0-9\s,.'-]*$/, length: 150 },
	{ attrName: userBio, regex: /^[a-zA-Z0-9\s,.'-]*$/, length: 300 },
];
let formValidation = () => {
	let validationCheck = true;
	let userInstance = new User();
	if (selectUserType.value === "Admin") {
		attributes.push({ attrName: userName, regex: /^[a-zA-Z0-9_]*$/, length: 30 },
			{ attrName: userPassword, regex: /^[a-zA-Z0-9_#@.&$]*$/, length: 30 });
	}
	attributes.forEach((attribute) => {
		if (!userInstance.checkNull(attribute.attrName)) {
			validationCheck = false;
			nullMsg(attribute.attrName, validationCheck);
		} else {
			if (!userInstance.matchRegex(attribute.attrName, attribute.regex)) {
				validationCheck = false;
				regexMsg(attribute.attrName, validationCheck);
			}
			else if (!userInstance.checkLen(attribute.attrName, attribute.length)) {
				validationCheck = false;
				lengthMsg(attribute.attrName, validationCheck);
			}
		}
		if (!userInstance.setProfilePicValidation(imgInput)) {
			validationCheck = false;
			pictureMsg(imgInput, validationCheck);
		}
	});
	if (userInstance.adminExist()) {
		adminMsg(true);
	}
	let userData = [
		userFirstName.value,
		userLastName.value,
		userEmail.value,
		userContactNumber.value,
		userAddress.value,
		userBio.value,
		imgDisplay.src
	];
	if (validationCheck) {
		if (selectUserType.value === "Admin") {
			if (userIndexCheck === null) {
				userData.push(userName.value, userPassword.value);
				userInstance.createNewAdmin(userData);
			} else {
				userData.push(userName.value, userPassword.value);
				userInstance.updateExistingAdmin(userData);
			}
		} else {
			if (userIndexCheck === null) {
				userInstance.createNewUser(userData);
			} else { userInstance.updateExistingUser(userData); }
		}
		fromReset();
	}
	refreshRecords();
};
charLimitCheck();
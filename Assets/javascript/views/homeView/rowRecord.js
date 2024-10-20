let recordRow = (profilePic, userId, userName, userType) => {
	let userDataContainer = createNewElement(["div", "individual_user_data", usersDataMainContainer]);
	let userTextRecordContainer = createNewElement(["div", "text_record", userDataContainer]);
	let userProfilePicContainer = createNewElement(["div", "user_profile_data", userTextRecordContainer]);
	let userProfilePicFigureTag = createNewElement(["figure", "profile_img_container",
		userProfilePicContainer]);
	createNewElement(["img", "user_profile_img", userProfilePicFigureTag, null, { src: `${profilePic}`, alt: "Profile Picture" }]);
	createNewElement(["p", "user_profile_data", userTextRecordContainer, `${userId}`, { id: "user_id" }]);
	createNewElement(["p", "user_profile_data", userTextRecordContainer, `${userName}`, { id: "user_fullName_data" }]);
	createNewElement(["p", "user_profile_data", userTextRecordContainer, `${userType}`, { id: "user_type_data" }]);
	let ProfileBtnOpsContainer = createNewElement(["div", "profile_btns_container", userDataContainer]);
	readUpdateDelete(userDataContainer, ProfileBtnOpsContainer, userId);
};
refreshRecords();
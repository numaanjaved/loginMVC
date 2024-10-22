let fromReset = () => {
    form.reset();
    adminAttContainer.style.display = "none";
    admin_heading.style.display = "none";
    imgDisplay.src = "./Assets/images/default_profile.png";
    let selectContainer = document.querySelector(".select_container");
    selectContainer.style.display = "block";
    selectUserType.value === "User";
    attributes = [
        { attrName: userFirstName, regex: /^[a-zA-Z\s]*$/, length: 30 },
        { attrName: userLastName, regex: /^[a-zA-Z\s]*$/, length: 30 },
        { attrName: userEmail, regex: /^[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*@[A-Za-z]+\.[A-Za-z]{2,}$/, length: 100 },
        { attrName: userContactNumber, regex: /^[0-9]{2,}[0-9]{7,}$/, length: 20 },
        { attrName: userAddress, regex: /^[a-zA-Z0-9\s,.'-]*$/, length: 150 },
        { attrName: userBio, regex: /^[a-zA-Z0-9\s,.'-]*$/, length: 300 },
    ];
};
let resetBtn = document.getElementById(`reset_btn`);
resetBtn.addEventListener("click", () => {
    userIndexCheck = null;
})

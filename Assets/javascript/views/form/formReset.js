let fromReset = () => {
    form.reset();
    adminAttContainer.style.display = "none";
    admin_heading.style.display = "none";
    let select = document.getElementById(`select_user`);
    let selectUserHeading = document.getElementById(`choose_user_heading`);
    select.style.display = "flex";
    selectUserHeading.style.display = "block";
};
let resetBtn = document.getElementById(`reset_btn`);
resetBtn.addEventListener("click", () => {
    userIndexCheck = null;
})

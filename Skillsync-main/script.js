const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

document.addEventListener("DOMContentLoaded", () => {
    const skillsInput = document.getElementById("skills-input");
    const skillsTags = document.getElementById("skills-tags");

    skillsInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && skillsInput.value.trim() !== "") {
            e.preventDefault();
            addSkillTag(skillsInput.value.trim());
            skillsInput.value = ""; // Clear input after adding tag
        }
    });

    function addSkillTag(skill) {
        const tag = document.createElement("span");
        tag.className = "skill-tag";
        tag.textContent = skill;

        const removeButton = document.createElement("span");
        removeButton.className = "remove-tag";
        removeButton.textContent = "✖";
        removeButton.onclick = () => tag.remove();

        tag.appendChild(removeButton);
        skillsTags.appendChild(tag);
    }
});

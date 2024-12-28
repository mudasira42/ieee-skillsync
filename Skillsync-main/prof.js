document.addEventListener('DOMContentLoaded', () => {
    const skillsInput = document.getElementById('skills-input');
    const skillsTags = document.getElementById('skills-tags');

    const interestsInput = document.getElementById('interests-input');
    const interestsTags = document.getElementById('interests-tags');

    // Function to create a tag
    function createTag(tagText, container) {
        const tag = document.createElement('div');
        tag.className = 'tag';
        tag.textContent = tagText;

        // Create delete button for the tag
        const deleteBtn = document.createElement('span');
        deleteBtn.className = 'delete-tag';
        deleteBtn.textContent = '✖';
        deleteBtn.onclick = () => {
            container.removeChild(tag);
        };

        tag.appendChild(deleteBtn);
        container.appendChild(tag);
    }

    // Add skills tag on Enter
    skillsInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && skillsInput.value.trim() !== '') {
            e.preventDefault();
            createTag(skillsInput.value.trim(), skillsTags);
            skillsInput.value = ''; // Clear input
        }
    });

    // Add interests tag on Enter
    interestsInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && interestsInput.value.trim() !== '') {
            e.preventDefault();
            createTag(interestsInput.value.trim(), interestsTags);
            interestsInput.value = ''; // Clear input
        }
    });
});

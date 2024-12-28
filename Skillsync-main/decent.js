// Define skills for each job
const jobSkills = {
    developer: ["Problem Solving", "Coding", "Debugging", "Algorithm Design", "Version Control"],
    designer: ["Creativity", "Adobe Suite", "Branding", "Typography", "UX/UI Design"],
    marketer: ["SEO", "Content Creation", "Social Media Management", "Data Analysis", "Copywriting"],
    teacher: ["Patience", "Communication", "Organization", "Subject Knowledge", "Empathy"],
    manager: ["Leadership", "Team Coordination", "Time Management", "Decision Making", "Budgeting"]
};

// Function to display skills based on selected job
function showSkills() {
    const jobSelect = document.getElementById("job-select").value;
    const skillsContainer = document.getElementById("skills-container");
    const skillsList = document.getElementById("skills-list");
    
    // Clear existing skills
    skillsList.innerHTML = "";
    
    if (jobSelect && jobSkills[jobSelect]) {
        skillsContainer.style.display = "block";
        
        // Create checkboxes for skills
        jobSkills[jobSelect].forEach(skill => {
            const skillCheckbox = document.createElement("input");
            skillCheckbox.type = "checkbox";
            skillCheckbox.value = skill;
            skillCheckbox.id = skill;
            
            const skillLabel = document.createElement("label");
            skillLabel.htmlFor = skill;
            skillLabel.textContent = skill;
            
            const skillItem = document.createElement("div");
            skillItem.appendChild(skillCheckbox);
            skillItem.appendChild(skillLabel);
            
            skillsList.appendChild(skillItem);
        });
    } else {
        skillsContainer.style.display = "none";
    }
}

// Function to determine suitability based on selected skills
function checkSuitability() {
    const selectedJob = document.getElementById("job-select").value;
    const selectedSkills = Array.from(document.querySelectorAll("#skills-list input:checked")).map(input => input.value);
    const resultMessage = document.getElementById("result-message");

    // Determine personality based on skills count
    let personality = "Balanced";
    let suggestions = [];

    if (selectedSkills.length >= 4) {
        personality = "Highly Suitable";
        suggestions = ["You are well-matched for your selected job!"];
    } else if (selectedSkills.length === 3) {
        personality = "Moderately Suitable";
        suggestions = ["You are a good fit but may benefit from additional skill development."];
    } else {
        personality = "Needs Improvement";
        suggestions = ["Consider enhancing your skills in the selected area."];
    }

    // Show result message
    resultMessage.innerHTML = `<strong>Personality:</strong> ${personality} <br><br> <strong>Recommendation:</strong> ${suggestions.join(" ")}`;
}

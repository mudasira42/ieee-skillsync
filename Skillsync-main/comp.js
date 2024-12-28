// Expanded dataset of companies with various job roles and decency scores
const companies = [
    // Software and Technology
    { name: "TechCorp", role: "Software Engineer", decencyScore: 8, reviews: "Positive work environment, fair pay, moderate hours" },
    { name: "CodeBase", role: "Software Engineer", decencyScore: 5, reviews: "High workload, below-average compensation, competitive environment" },
    { name: "Innova", role: "Backend Developer", decencyScore: 7, reviews: "Supportive team, average pay, flexible hours" },
    { name: "WebFlow", role: "Frontend Developer", decencyScore: 6, reviews: "Creative projects, moderate hours, decent pay" },

    // Product Management
    { name: "Innovatech", role: "Product Manager", decencyScore: 7, reviews: "Decent hours, fair pay, supportive team" },
    { name: "MarketMakers", role: "Product Manager", decencyScore: 6, reviews: "Fair pay, supportive team, long hours" },

    // Data and Analytics
    { name: "DataSolutions", role: "Data Scientist", decencyScore: 6, reviews: "High hours, fair pay, collaborative environment" },
    { name: "DataGenics", role: "Data Analyst", decencyScore: 8, reviews: "Flexible hours, fair compensation, excellent support" },
    { name: "InfoInsights", role: "Data Engineer", decencyScore: 7, reviews: "Good team environment, decent pay, long hours" },

    // Design and Creative
    { name: "DesignHub", role: "UI/UX Designer", decencyScore: 9, reviews: "Great work culture, flexible hours, above-average compensation" },
    { name: "CreativeMinds", role: "Graphic Designer", decencyScore: 10, reviews: "Excellent work-life balance, fair pay, collaborative team" },
    { name: "Artistry", role: "Illustrator", decencyScore: 8, reviews: "Positive atmosphere, competitive pay, flexible hours" },

    // Marketing and Sales
    { name: "BrandBoost", role: "Digital Marketer", decencyScore: 7, reviews: "Great team, flexible work hours, competitive pay" },
    { name: "MarketWorld", role: "Sales Associate", decencyScore: 5, reviews: "High targets, average pay, supportive management" },
    { name: "PromoPartners", role: "Marketing Manager", decencyScore: 6, reviews: "Fair compensation, high workload, collaborative team" },

    // Human Resources
    { name: "PeoplePlus", role: "HR Manager", decencyScore: 8, reviews: "Supportive team, average pay, good work-life balance" },
    { name: "TalentTree", role: "Recruiter", decencyScore: 7, reviews: "Competitive pay, long hours, collaborative environment" },
    { name: "HRXperts", role: "HR Coordinator", decencyScore: 6, reviews: "Fair pay, supportive environment, some overtime" },

    // Finance and Accounting
    { name: "FinanceWorks", role: "Financial Analyst", decencyScore: 7, reviews: "Decent pay, long hours, challenging work" },
    { name: "BudgetPros", role: "Accountant", decencyScore: 9, reviews: "High work-life balance, fair pay, professional team" },
    { name: "WealthWise", role: "Investment Banker", decencyScore: 5, reviews: "Intense workload, high pay, demanding environment" },

    // Engineering and Manufacturing
    { name: "BuildIt", role: "Mechanical Engineer", decencyScore: 8, reviews: "Supportive environment, fair pay, challenging work" },
    { name: "ConstructCo", role: "Civil Engineer", decencyScore: 7, reviews: "Competitive pay, team-oriented, high workload" },
    { name: "ElecTech", role: "Electrical Engineer", decencyScore: 6, reviews: "Good pay, long hours, tight deadlines" },

    // Healthcare and Medical
    { name: "HealthFirst", role: "Nurse", decencyScore: 9, reviews: "Good work-life balance, supportive team, fair pay" },
    { name: "MedicoCare", role: "Doctor", decencyScore: 7, reviews: "Long hours, excellent team, fair compensation" },
    { name: "WellnessWorks", role: "Medical Technician", decencyScore: 8, reviews: "Good team, decent pay, manageable hours" }
];

// Function to show score from range input
function showScore(score) {
    document.getElementById("score-display").textContent = score;
}

// Function to filter companies based on role and decency score
function filterCompanies() {
    const selectedRole = document.getElementById("role-select").value;
    const minDecencyScore = document.getElementById("decency-filter").value;
    const companyList = document.getElementById("company-list");

    // Clear previous results
    companyList.innerHTML = "";

    // Filter companies based on selected role and decency score
    const filteredCompanies = companies.filter(company =>
        company.role === selectedRole && company.decencyScore >= minDecencyScore
    );

    // Display results
    if (filteredCompanies.length > 0) {
        filteredCompanies.forEach(company => {
            const listItem = document.createElement("li");
            listItem.textContent = `${company.name} - Decency Score: ${company.decencyScore} - ${company.reviews}`;
            companyList.appendChild(listItem);
        });
    } else {
        companyList.innerHTML = "<li>No matching companies found</li>";
    }
}

document.getElementById('assessmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect responses
    const personalityResponses = [
        document.querySelector('input[name="personality1"]:checked').value,
        document.querySelector('input[name="personality2"]:checked').value
    ];

    const skillResponses = [
        document.querySelector('input[name="skill1"]:checked').value,
        document.querySelector('input[name="skill2"]:checked').value
    ];

    // Calculate personality type
    const personalityScore = personalityResponses.reduce((sum, value) => sum + parseInt(value), 0);
    let personalityType;
    if (personalityScore <= 3) {
        personalityType = "Independent Thinker";
    } else if (personalityScore <= 5) {
        personalityType = "Collaborative Problem-Solver";
    } else {
        personalityType = "Driven Leader";
    }

    // Determine skill strengths
    const skillStrengths = `Key Skills: ${skillResponses.join(", ")}`;

    // Display the result
    document.getElementById('personalityType').innerText = `Personality Type: ${personalityType}`;
    document.getElementById('skillStrengths').innerText = skillStrengths;
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('assessmentForm').classList.add('hidden');

    // Restart button functionality
    document.getElementById('restartButton').addEventListener('click', function() {
        document.getElementById('result').classList.add('hidden');
        document.getElementById('assessmentForm').reset();
        document.getElementById('assessmentForm').classList.remove('hidden');
    });

    // Optionally, pass the results to your job-matching algorithm
    // jobMatchingAlgorithm({ personalityType, skillStrengths });
});

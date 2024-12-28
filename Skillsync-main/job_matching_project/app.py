from flask import Flask, render_template, request, jsonify
import os
import pdfplumber
import json

app = Flask(__name__)
app.config["UPLOAD_FOLDER"] = "uploads"

# Mock job data for testing
jobs = [
    {"title": "Software Developer", "company": "TechCorp", "location": "New York", "skills": ["Python", "JavaScript"], "description": "Develop web applications."},
    {"title": "Data Analyst", "company": "DataWiz", "location": "San Francisco", "skills": ["SQL", "Python"], "description": "Analyze datasets and create insights."},
    {"title": "Frontend Developer", "company": "WebGen", "location": "Remote", "skills": ["HTML", "CSS", "JavaScript"], "description": "Build UI/UX for websites."}
]

# Skill list for matching
skills_list = ["Python", "SQL", "JavaScript", "React", "HTML", "CSS", "Data Analysis"]

def extract_skills_from_resume(filepath):
    """
    Extract skills from the uploaded resume using pdfplumber.
    """
    extracted_skills = set()
    try:
        with pdfplumber.open(filepath) as pdf:
            for page in pdf.pages:
                text = page.extract_text()
                if text:
                    for skill in skills_list:
                        if skill.lower() in text.lower():
                            extracted_skills.add(skill)
    except Exception as e:
        print(f"Error reading PDF: {e}")
    return list(extracted_skills)

def match_jobs(user_skills):
    """
    Match the user's skills with the available jobs and return the top matches.
    """
    matched_jobs = []
    for job in jobs:
        job_skills = set(job["skills"])
        overlap = job_skills.intersection(set(user_skills))
        match_score = len(overlap) / len(job_skills) if job_skills else 0
        if match_score > 0.5:  # Threshold for matching
            matched_jobs.append({**job, "score": match_score})
    matched_jobs.sort(key=lambda x: x["score"], reverse=True)
    return matched_jobs

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        if 'resume' not in request.files:
            return jsonify({"error": "No file part"}), 400
        
        resume = request.files["resume"]
        if resume.filename == '':
            return jsonify({"error": "No selected file"}), 400

        filepath = os.path.join(app.config["UPLOAD_FOLDER"], resume.filename)
        try:
            os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)
            resume.save(filepath)

            user_skills = extract_skills_from_resume(filepath)
            matched_jobs = match_jobs(user_skills)

            os.remove(filepath)  # Cleanup uploaded file
            return jsonify(matched_jobs)
        except Exception as e:
            print(f"Error processing the resume: {e}")
            return jsonify({"error": f"An error occurred: {str(e)}"}), 500

    return render_template("index1.html")

if __name__ == "__main__":
    app.run(debug=True)


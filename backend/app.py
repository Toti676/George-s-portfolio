from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load sample data
def load_projects():
    """Load projects data from JSON file"""
    try:
        with open('data/projects.json', 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        # Fallback data if file doesn't exist
        return [
            {
                "id": 1,
                "title": "E-Commerce Platform",
                "description": "A full-stack e-commerce application with user authentication, product management, and payment integration.",
                "technologies": ["React", "Node.js", "MongoDB", "Stripe"],
                "image": "https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=E-Commerce",
                "demo_link": "https://demo-ecommerce.com",
                "repo_link": "https://github.com/username/ecommerce-app",
                "category": "Full-Stack"
            },
            {
                "id": 2,
                "title": "Task Management App",
                "description": "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
                "technologies": ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
                "image": "https://via.placeholder.com/300x200/10B981/FFFFFF?text=Task+App",
                "demo_link": "https://task-app-demo.com",
                "repo_link": "https://github.com/username/task-app",
                "category": "Frontend"
            },
            {
                "id": 3,
                "title": "Weather Dashboard",
                "description": "A weather application that displays current weather conditions, forecasts, and historical data with interactive charts.",
                "technologies": ["JavaScript", "Chart.js", "OpenWeather API", "CSS3"],
                "image": "https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Weather+App",
                "demo_link": "https://weather-dashboard.com",
                "repo_link": "https://github.com/username/weather-app",
                "category": "Frontend"
            },
            {
                "id": 4,
                "title": "Machine Learning API",
                "description": "A RESTful API for machine learning models with endpoints for image classification, text analysis, and data processing.",
                "technologies": ["Python", "Flask", "TensorFlow", "Docker", "PostgreSQL"],
                "image": "https://via.placeholder.com/300x200/DC2626/FFFFFF?text=ML+API",
                "demo_link": "https://ml-api-demo.com",
                "repo_link": "https://github.com/username/ml-api",
                "category": "Backend"
            }
        ]

def load_skills():
    """Load skills data"""
    return {
        "frontend": ["HTML5", "CSS3", "JavaScript", "React"],
        "backend": ["Python", "Node.js", "Flask", "MySQL"],
        "tools": ["Git", "VS Code", "Postman"],
        "other": ["RESTful APIs", "Agile", "UI/UX"]
    }

@app.route('/')
def home():
    """Root endpoint"""
    return jsonify({
        "message": "Portfolio Website API",
        "endpoints": {
            "projects": "/api/projects",
            "skills": "/api/skills"
        }
    })

@app.route('/api/projects')
def get_projects():
    """Get all projects"""
    projects = load_projects()
    return jsonify(projects)

@app.route('/api/projects/<int:project_id>')
def get_project(project_id):
    """Get a specific project by ID"""
    projects = load_projects()
    project = next((p for p in projects if p['id'] == project_id), None)
    
    if project:
        return jsonify(project)
    else:
        return jsonify({"error": "Project not found"}), 404

@app.route('/api/skills')
def get_skills():
    """Get all skills organized by category"""
    skills = load_skills()
    return jsonify(skills)

@app.route('/api/contact', methods=['POST'])
def submit_contact():
    """Handle contact form submissions"""
    try:
        data = request.get_json()
        
        # Validate required fields
        if not data or not all(key in data for key in ['name', 'email', 'message']):
            return jsonify({"error": "Missing required fields"}), 400
        
        # Create contact entry
        contact_entry = {
            "id": datetime.now().timestamp(),  # Simple ID generation
            "name": data['name'],
            "email": data['email'],
            "message": data['message'],
            "timestamp": datetime.now().isoformat(),
            "status": "new"
        }
        
        # Save to contacts.json file
        contacts_file = 'data/contacts.json'
        contacts = []
        
        # Load existing contacts if file exists
        if os.path.exists(contacts_file):
            try:
                with open(contacts_file, 'r') as f:
                    contacts = json.load(f)
            except json.JSONDecodeError:
                contacts = []
        
        # Add new contact
        contacts.append(contact_entry)
        
        # Save updated contacts
        with open(contacts_file, 'w') as f:
            json.dump(contacts, f, indent=2)
        
        # In production, you might want to send an email here
        # or integrate with a service like SendGrid, Mailgun, etc.
        
        return jsonify({
            "message": "Contact form submitted successfully",
            "contact_id": contact_entry["id"]
        }), 201
        
    except Exception as e:
        print(f"Error processing contact form: {e}")
        return jsonify({"error": "Internal server error"}), 500

@app.route('/api/contacts', methods=['GET'])
def get_contacts():
    """Get all contact form submissions"""
    try:
        contacts_file = 'data/contacts.json'
        
        if not os.path.exists(contacts_file):
            return jsonify([])
        
        with open(contacts_file, 'r') as f:
            contacts = json.load(f)
        
        # Sort by timestamp (newest first)
        contacts.sort(key=lambda x: x['timestamp'], reverse=True)
        
        return jsonify(contacts)
        
    except Exception as e:
        print(f"Error loading contacts: {e}")
        return jsonify({"error": "Internal server error"}), 500

@app.route('/api/contacts/<contact_id>/status', methods=['PUT'])
def update_contact_status(contact_id):
    """Update contact message status (e.g., mark as read)"""
    try:
        data = request.get_json()
        new_status = data.get('status', 'read')
        
        contacts_file = 'data/contacts.json'
        
        if not os.path.exists(contacts_file):
            return jsonify({"error": "No contacts found"}), 404
        
        with open(contacts_file, 'r') as f:
            contacts = json.load(f)
        
        # Find and update the contact
        contact_found = False
        for contact in contacts:
            if str(contact['id']) == str(contact_id):
                contact['status'] = new_status
                contact_found = True
                break
        
        if not contact_found:
            return jsonify({"error": "Contact not found"}), 404
        
        # Save updated contacts
        with open(contacts_file, 'w') as f:
            json.dump(contacts, f, indent=2)
        
        return jsonify({"message": "Status updated successfully"})
        
    except Exception as e:
        print(f"Error updating contact status: {e}")
        return jsonify({"error": "Internal server error"}), 500

@app.route('/api/health')
def health_check():
    """Health check endpoint for deployment monitoring"""
    return jsonify({"status": "healthy", "message": "API is running"})

if __name__ == '__main__':
    # Create data directory if it doesn't exist
    os.makedirs('data', exist_ok=True)
    
    # Save sample projects data if it doesn't exist
    if not os.path.exists('data/projects.json'):
        projects = load_projects()
        with open('data/projects.json', 'w') as f:
            json.dump(projects, f, indent=2)
    
    print("🚀 Starting Portfolio Website API...")
    print("📍 Backend running on: http://localhost:5000")
    print("🔗 Available endpoints:")
    print("   - GET /api/projects - Get all projects")
    print("   - GET /api/skills - Get all skills")
    print("   - GET /api/health - Health check")
    
    app.run(debug=True, host='0.0.0.0', port=5000)

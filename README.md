# 🚀 Portfolio Website

A modern, responsive portfolio website built with React frontend and Flask backend. Features a contact form with admin panel, project showcase, and skills display.

## ✨ Features

- **Responsive Design** - Works perfectly on all devices
- **Contact Form** - Visitors can send messages directly
- **Admin Panel** - Manage and track contact submissions
- **Project Showcase** - Display your work with beautiful cards
- **Skills Section** - Highlight your technical expertise
- **Modern UI/UX** - Clean, professional design with smooth animations

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **React Router** - Client-side routing
- **CSS3** - Custom styling with responsive design
- **HTML5** - Semantic markup

### Backend
- **Flask** - Python web framework
- **Flask-CORS** - Cross-origin resource sharing
- **JSON** - Simple data storage
- **Gunicorn** - Production WSGI server

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Run the setup script**
   ```bash
   # Windows
   setup.bat
   
   # Or manually:
   # Backend
   cd backend
   python -m venv venv
   venv\Scripts\activate  # Windows
   source venv/bin/activate  # Mac/Linux
   pip install -r requirements.txt
   
   # Frontend
   cd frontend
   npm install
   ```

3. **Start the servers**
   ```bash
   # Terminal 1 - Backend
   cd backend
   venv\Scripts\activate  # Windows
   source venv/bin/activate  # Mac/Linux
   python app.py
   
   # Terminal 2 - Frontend
   cd frontend
   npm start
   ```

4. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Admin Panel: http://localhost:3000/admin

## 📁 Project Structure

```
portfolio-website/
├── backend/              # Flask API server
│   ├── app.py           # Main server file
│   ├── data/            # JSON data storage
│   └── requirements.txt # Python dependencies
├── frontend/            # React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── styles/      # CSS files
│   │   └── App.js       # Main app with routing
│   └── package.json     # Node.js dependencies
└── README.md            # This file
```

## 🔧 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/projects` | GET | Get all projects |
| `/api/skills` | GET | Get skills by category |
| `/api/contact` | POST | Submit contact form |
| `/api/contacts` | GET | Get all contact submissions |
| `/api/contacts/{id}/status` | PUT | Update contact status |

## 🎨 Customization

### Adding Projects
Edit `backend/data/projects.json`:
```json
{
  "id": 5,
  "title": "Your Project",
  "description": "Project description",
  "technologies": ["React", "Node.js"],
  "image": "project-image-url",
  "demo_link": "live-demo-url",
  "repo_link": "github-repo-url",
  "category": "Full-Stack"
}
```

### Updating Skills
Edit the `load_skills()` function in `backend/app.py`

### Styling
Modify CSS files in `frontend/src/styles/`

## 📱 Responsive Design

- **Mobile-first** approach
- **Flexbox and Grid** layouts
- **Media queries** for different screen sizes
- **Touch-friendly** interactions

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Upload build folder to your hosting service
```

### Backend (Render/Heroku)
```bash
# Add render.yaml or Procfile
# Deploy to your chosen platform
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Portfolio: [Your Website](https://yoursite.com)

## 🙏 Acknowledgments

- React team for the amazing framework
- Flask team for the Python web framework
- All the open-source packages used in this project

---

⭐ **Star this repository if you found it helpful!**

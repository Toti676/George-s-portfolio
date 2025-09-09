# Portfolio Website

A modern, responsive portfolio website built with React frontend and Flask backend. Features a contact form with admin panel, project showcase, and skills display.

## Tech Stack

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

## 🔧 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/projects` | GET | Get all projects |
| `/api/skills` | GET | Get skills by category |
| `/api/contact` | POST | Submit contact form |
| `/api/contacts` | GET | Get all contact submissions |
| `/api/contacts/{id}/status` | PUT | Update contact status |


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


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**George He**
- GitHub: [@toti676](https://github.com/Toti676)
- LinkedIn: [George He](www.linkedin.com/in/jiaxi-he676)
- Portfolio: [Your Website](https://yoursite.com)


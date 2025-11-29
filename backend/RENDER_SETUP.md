# Render Deployment Guide

## Step-by-Step Setup

### 1. Create a Render Account
- Go to [render.com](https://render.com)
- Sign up or log in with GitHub

### 2. Create a New Web Service

1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository
3. Select your repository: `George-s-portfolio`

### 3. Configure the Service

**Basic Settings:**
- **Name:** `portfolio-backend` (or any name you prefer)
- **Region:** Choose closest to you
- **Branch:** `main` (or your default branch)
- **Root Directory:** `backend`
- **Runtime:** `Python 3`
- **Build Command:** `pip install -r requirements.txt`
- **Start Command:** `gunicorn app:app`

**Advanced Settings:**
- **Plan:** Free (or paid if you need more resources)

### 4. Set Environment Variables

1. Scroll down to **"Environment Variables"** section
2. Click **"Add Environment Variable"**
3. Add:
   - **Key:** `GEMINI_API_KEY`
   - **Value:** Your actual API key 
4. Click **"Save Changes"**

### 5. Deploy

1. Click **"Create Web Service"**
2. Render will automatically:
   - Install dependencies
   - Build your app
   - Start the service
3. Wait for deployment to complete (usually 2-5 minutes)

### 6. Get Your Backend URL

After deployment:
- Your backend will be available at: `https://your-service-name.onrender.com`
- Copy this URL - you'll need it for your frontend

### 7. Update Frontend API Calls

Update your frontend to use the production backend URL:

**Option A: Environment Variable (Recommended)**

In Netlify:
1. Go to your site settings
2. Navigate to **"Environment variables"**
3. Add:
   - **Key:** `REACT_APP_API_URL`
   - **Value:** `https://your-service-name.onrender.com`

Then update your frontend code to use:
```javascript
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
fetch(`${API_URL}/api/chat`, ...)
```

**Option B: Update package.json proxy**

In `frontend/package.json`, update the proxy:
```json
"proxy": "https://your-service-name.onrender.com"
```

**Option C: Hardcode (Not Recommended)**

Update all API calls in your frontend to use the full URL.

### 8. Update CORS (if needed)

If your frontend is on a different domain, update `backend/app.py`:

```python
from flask_cors import CORS

# Allow specific origin in production
if os.getenv('RENDER'):
    CORS(app, origins=["https://your-netlify-site.netlify.app"])
else:
    CORS(app)  # Allow all in development
```

Or use environment variable:
```python
frontend_url = os.getenv('FRONTEND_URL', '*')
CORS(app, origins=[frontend_url] if frontend_url != '*' else '*')
```

## Troubleshooting

### Issue: Service won't start
- Check logs in Render dashboard
- Verify `gunicorn` is in `requirements.txt` ✅ (it is)
- Make sure `Procfile` exists ✅ (created)

### Issue: "Gemini API key not configured"
- Verify environment variable is set correctly
- Check variable name is exactly `GEMINI_API_KEY` (case-sensitive)
- Redeploy after adding the variable

### Issue: CORS errors
- Update CORS configuration to allow your frontend domain
- Check that your frontend is calling the correct backend URL

### Issue: Service goes to sleep (Free tier)
- Free tier services sleep after 15 minutes of inactivity
- First request after sleep takes ~30 seconds to wake up
- Consider upgrading to paid plan for always-on service

## Monitoring

- View logs in Render dashboard
- Check service health at: `https://your-service-name.onrender.com/api/health`
- Monitor API usage in Google Cloud Console

## Next Steps

1. ✅ Set `GEMINI_API_KEY` environment variable
2. ✅ Deploy backend to Render
3. ✅ Update frontend to use production backend URL
4. ✅ Test chatbot on production site
5. ✅ Monitor logs for any errors


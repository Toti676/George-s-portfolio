# Production Deployment Guide

## Environment Variables Setup

The `GEMINI_API_KEY` environment variable needs to be configured in your production backend hosting platform.

### Where to Set the API Key

**Important:** The API key should ONLY be set in your **backend** deployment, not the frontend. The frontend calls your backend API, which then uses the API key.

---

## Platform-Specific Instructions

### 1. Render.com

1. Go to your Render dashboard
2. Select your backend service
3. Navigate to **Environment** tab
4. Click **Add Environment Variable**
5. Add:
   - **Key:** `GEMINI_API_KEY`
   - **Value:** Your actual API key (e.g., `AIzaSyBjhYY_v_bZ0eYRRAdYeYpq8_4-EJD_L-s`)
6. Click **Save Changes**
7. Redeploy your service (or it will auto-redeploy)

### 2. Railway.app

1. Go to your Railway project dashboard
2. Select your backend service
3. Click on the **Variables** tab
4. Click **+ New Variable**
5. Add:
   - **Variable Name:** `GEMINI_API_KEY`
   - **Value:** Your actual API key
6. Click **Add**
7. Railway will automatically redeploy

### 3. Heroku

1. Go to your Heroku dashboard
2. Select your app
3. Go to **Settings** tab
4. Click **Reveal Config Vars**
5. Click **Add**
6. Add:
   - **Key:** `GEMINI_API_KEY`
   - **Value:** Your actual API key
7. Click **Save**
8. Restart your dyno: `heroku restart`

Or use Heroku CLI:
```bash
heroku config:set GEMINI_API_KEY=your_actual_api_key_here
```

### 4. Fly.io

1. Use Fly CLI:
```bash
fly secrets set GEMINI_API_KEY=your_actual_api_key_here
```

2. Or in Fly dashboard:
   - Go to your app
   - Navigate to **Secrets** tab
   - Add `GEMINI_API_KEY` with your value

### 5. DigitalOcean App Platform

1. Go to your DigitalOcean dashboard
2. Select your app
3. Go to **Settings** → **App-Level Environment Variables**
4. Click **Edit**
5. Add:
   - **Key:** `GEMINI_API_KEY`
   - **Value:** Your actual API key
6. Click **Save**
7. App will automatically redeploy

### 6. AWS Elastic Beanstalk

1. Go to AWS Console → Elastic Beanstalk
2. Select your environment
3. Go to **Configuration** → **Software**
4. Scroll to **Environment properties**
5. Click **Edit**
6. Add:
   - **Property name:** `GEMINI_API_KEY`
   - **Value:** Your actual API key
7. Click **Apply**

### 7. Google Cloud Run

1. Use gcloud CLI:
```bash
gcloud run services update YOUR_SERVICE_NAME \
  --set-env-vars GEMINI_API_KEY=your_actual_api_key_here
```

2. Or in Google Cloud Console:
   - Go to Cloud Run
   - Select your service
   - Click **Edit & Deploy New Revision**
   - Go to **Variables & Secrets** tab
   - Add environment variable `GEMINI_API_KEY`

---

## Verifying the Setup

After setting the environment variable, verify it's working:

1. Check your backend logs for any API key errors
2. Test the chatbot on your production site
3. If you see "Gemini API key not configured" errors, the environment variable isn't set correctly

---

## Security Best Practices

✅ **DO:**
- Set environment variables in your hosting platform's dashboard
- Use different API keys for development and production (if needed)
- Keep your API key secret and never commit it to git

❌ **DON'T:**
- Hardcode API keys in your code
- Commit `.env` files to git
- Share your API key publicly
- Set the API key in the frontend (it should only be in the backend)

---

## Troubleshooting

### Issue: "Gemini API key not configured" error

**Solution:**
1. Verify the environment variable name is exactly `GEMINI_API_KEY` (case-sensitive)
2. Check that the value doesn't have extra spaces or quotes
3. Ensure you've redeployed after setting the variable
4. Check your backend logs for confirmation

### Issue: API calls failing in production

**Solution:**
1. Verify the API key is valid
2. Check your Google Cloud Console for API usage/quota limits
3. Ensure CORS is properly configured for your production frontend URL
4. Check backend logs for detailed error messages

---

## Frontend Configuration

**Note:** Your frontend (Netlify) does NOT need the API key. The frontend makes requests to your backend API, which handles the Gemini API calls.

If your frontend is on a different domain than your backend, make sure:
1. CORS is configured in `backend/app.py` to allow your frontend domain
2. Your frontend's API calls point to your production backend URL (not `localhost:5000`)


# Google Gemini API Setup

## Getting Your Free API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey) or [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key" or "Get API Key"
4. Copy your API key

## Setting Up the API Key

1. Create a `.env` file in the `backend` folder (if it doesn't exist)
2. Add your API key to the `.env` file:

```
GEMINI_API_KEY=your_actual_api_key_here
```

**Important:** Never commit the `.env` file to git! It's already in `.gitignore`.

## Testing

Once you've set up the API key:
1. Make sure your backend is running: `python app.py`
2. Open your frontend and test the chatbot
3. The chatbot will now use Google Gemini AI to generate responses!

## Free Tier Limits

Google Gemini API free tier includes:
- 60 requests per minute
- 1,500 requests per day
- Perfect for personal portfolio websites!


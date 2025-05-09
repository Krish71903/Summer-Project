# ResuMatch AI

A SaaS platform that helps job seekers match their resumes with job descriptions using AI.

## Features

- Resume parsing and analysis
- Job description matching
- AI-powered insights and suggestions
- User authentication
- Premium features with Stripe integration

## Tech Stack

### Frontend
- Next.js
- Tailwind CSS
- TypeScript
- React Context for state management

### Backend
- FastAPI
- SQLAlchemy
- Supabase
- OpenAI API integration
- Stripe for payments

## Getting Started

### Prerequisites
- Node.js 18+
- Python 3.9+
- Supabase account
- OpenAI API key
- Stripe account

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/resumatch-ai.git
cd resumatch-ai
```

2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

3. Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

4. Environment Variables
Create a `.env` file in the root directory with the following variables:
```
NEXT_PUBLIC_API_URL=http://localhost:8000
OPENAI_API_KEY=your_openai_api_key
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

## License

MIT License - see LICENSE file for details
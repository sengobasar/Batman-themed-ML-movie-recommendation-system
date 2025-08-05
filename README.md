🦇 Gotham Movie Recommendation App 🍿
A Batman-themed movie recommendation system built with React + Tailwind CSS (frontend) and FastAPI + Machine Learning model (backend).

🔰 My first full-stack ML project!

✨ Features
Themed UI: Dark, heroic interface with Bat-Signal, Robin elements, and subtle cityscapes.

Smart Search: Enter a movie or genre for instant recommendations.

Dynamic Results: Displays curated movies with titles, genres, descriptions, and themed posters.

Responsive Design: Optimized for all devices.

📦 Project Structure
fastapi_project/
├── movie-frontend/      # React + Tailwind frontend
├── movie-backend/       # FastAPI backend with ML model
├── .dist/               # (Optional) Build artifacts
└── __pycache__/         # Python bytecode cache


🧠 Machine Learning Model
The backend uses:

TF-IDF Vectorization and Cosine Similarity for recommendations.

Built with scikit-learn & pandas.

Content-based engine trained on genres, cast, keywords, director, tagline from local CSV data.

🚀 How to Run
Clone the repo
git clone https://github.com/your-username/batman-movie-recommender.git
cd fastapi_project


Backend (FastAPI + ML)
cd movie-backend
pip install -r requirements.txt
uvicorn main:app --reload


Make sure your movies.csv is in this directory.

Frontend (React)
cd ../movie-frontend
npm install
npm start


🎬 Usage
Enter preference: Type a movie (e.g., "Dark Knight") or genre.

Get Recommendations: Click "Find Bat-Recommendations."

View Results: Movies are displayed.

Clear Search: Reset input and results.

🚧 Future Improvements
Integrate real movie posters (TMDB API).

Add genre/rating filters.

Deploy with Vercel + Render/Railway.

📜 License
MIT License — free to use and modify!

Built with vigilance and a passion for cinema!

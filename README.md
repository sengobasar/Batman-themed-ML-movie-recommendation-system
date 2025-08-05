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
Follow these steps to get Gotham Movie Recommendation App up and running on your local machine. Ensure you follow the steps for both the backend and frontend components.

Prerequisites
Make sure you have the following installed:

Node.js & npm: Required for the React frontend.

Download Node.js (npm is included with Node.js)

Python 3.8+: Required for the FastAPI backend and ML model.

Download Python

pip: Python package installer (usually comes with Python).

Installation
Clone the repository:
Start by cloning the project from GitHub to your local machine:

git clone https://github.com/your-username/batman-movie-recommender.git
cd fastapi_project

Backend (FastAPI + ML Model) Setup
Navigate to the backend directory:

cd movie-backend

Install Python dependencies:
It's highly recommended to use a virtual environment to manage dependencies:

python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
pip install -r requirements.txt

(Make sure you have a requirements.txt file in your movie-backend directory listing all necessary Python libraries like fastapi, uvicorn, scikit-learn, pandas.)

Place your dataset:
Ensure your movie data file, movies.csv, is located in this movie-backend directory. This CSV file is crucial for the ML model.

Start the FastAPI server:

uvicorn main:app --reload

This will start the backend server, typically accessible at http://127.0.0.1:8000. The --reload flag will automatically restart the server on code changes.

Frontend (React) Setup
Navigate to the frontend directory:
Open a new terminal window and navigate back to the fastapi_project root, then into the frontend directory:

cd ../movie-frontend

Install Node.js dependencies:

npm install

Start the React development server:

npm start

This will launch the React app in your browser, usually at http://localhost:3000.

Troubleshooting
ModuleNotFoundError: If you encounter this, ensure all dependencies are installed using pip install -r requirements.txt (for backend) or npm install (for frontend).

Backend not connecting: Verify the FastAPI server is running (check terminal output) and that the frontend is configured to call the correct backend URL (default http://127.0.0.1:8000).

movies.csv not found: Confirm movies.csv is directly in the movie-backend directory.

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

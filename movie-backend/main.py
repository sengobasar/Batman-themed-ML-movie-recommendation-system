# main.py

import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import difflib
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List

# 🔹 Load and process movie data
movies_data = pd.read_csv("movies.csv")
movies_data.reset_index(inplace=True)  # Ensure 'index' column exists
selected_features = ['genres', 'keywords', 'tagline', 'cast', 'director']
for feature in selected_features:
    movies_data[feature] = movies_data[feature].fillna('')

combined_features = movies_data[selected_features].agg(' '.join, axis=1)
vectorizer = TfidfVectorizer()
feature_vectors = vectorizer.fit_transform(combined_features)
similarity = cosine_similarity(feature_vectors)

# 🔹 FastAPI app setup
app = FastAPI()

# 🔹 Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or use ["http://localhost:3000"] for stricter control
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🔹 API route to get recommendations
@app.get("/recommend", response_model=List[str])
def recommend_movies(movie_name: str):
    movie_list = movies_data['title'].tolist()
    matches = difflib.get_close_matches(movie_name, movie_list)

    if not matches:
        return ["No match found"]

    match = matches[0]
    index = movies_data[movies_data.title == match]['index'].values[0]
    scores = list(enumerate(similarity[index]))
    sorted_movies = sorted(scores, key=lambda x: x[1], reverse=True)

    recommendations = []
    for i in range(1, 11):  # Top 10 recommendations
        movie_index = sorted_movies[i][0]
        title = movies_data[movies_data.index == movie_index]['title'].values[0]
        recommendations.append(title)

    return recommendations

import React, { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // 🔗 Connect to backend
  const fetchRecommendations = async () => {
    setRecommendations([]);
    setError('');
    setIsLoading(true);

    try {
      // CORRECTED: Use the public URL of the deployed backend on Render.
      const response = await fetch(`https://batman-themed-ml-movie-recommendation.onrender.com/recommend?movie_name=${encodeURIComponent(userInput)}`);
      
      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();

      if (data[0] === "No match found") {
        setError("No similar movie found. Try another title.");
      } else {
        const mapped = data.map((title, i) => ({
          id: i + 1,
          title,
          genre: "Genre unknown",
          description: "Recommendation from Bat-Computer.",
          posterUrl: `https://placehold.co/120x180/333333/FFFFFF?text=${encodeURIComponent(title.slice(0, 12))}`
        }));
        setRecommendations(mapped);
      }

    } catch (err) {
      setError("Backend error: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const clearRecommendations = () => {
    setUserInput('');
    setRecommendations([]);
    setError('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 font-inter relative overflow-hidden text-white">
      <style>
        {`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes bounce-medium {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-8deg); }
        }
        .animate-bounce-slow { animation: bounce-slow 10s infinite ease-in-out; }
        .animate-bounce-medium { animation: bounce-medium 8s infinite ease-in-out; }
        `}
      </style>

      {/* Decorative SVGs */}
      <div className="absolute top-10 left-10 w-24 h-24 opacity-30 animate-bounce-slow">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-yellow-400">
          <circle cx="50" cy="50" r="45" />
          <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" fill="#000" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-16 w-32 h-32 opacity-30 animate-bounce-medium">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-red-600">
          <circle cx="50" cy="50" r="45" fill="currentColor" />
          <path d="M50 10 L75 40 L60 90 L40 90 L25 40 Z" fill="#000" />
        </svg>
      </div>

      {/* Main App Card */}
      <div className="bg-gray-800 bg-opacity-90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl max-w-4xl w-full z-10 border border-gray-700">
        <h1 className="text-4xl font-extrabold text-center text-white mb-6 drop-shadow-md">
          Gotham's Cinematic Selections 🦇
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            className="flex-grow p-3 border border-gray-600 rounded-xl bg-gray-700 text-white placeholder-gray-400"
            placeholder="Enter a movie or hero (e.g., 'Dark Knight')"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            disabled={isLoading}
          />
          <button
            onClick={fetchRecommendations}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 disabled:opacity-50"
            disabled={isLoading || userInput.trim() === ''}
          >
            {isLoading ? 'Searching Gotham...' : 'Find Bat-Recommendations'}
          </button>
          <button
            onClick={clearRecommendations}
            className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-xl hover:bg-gray-700"
            disabled={isLoading && recommendations.length === 0}
          >
            Clear
          </button>
        </div>

        {/* Feedback UI */}
        {isLoading && <div className="text-center text-blue-400">Calling the Bat-Computer...</div>}
        {error && <div className="text-center text-red-500">{error}</div>}

        {/* Recommendation Cards */}
        {!isLoading && recommendations.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {recommendations.map(movie => (
              <div key={movie.id} className="bg-gray-700 p-4 rounded-2xl border border-gray-600">
                <img
                  src={movie.posterUrl}
                  alt={`${movie.title} Poster`}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/120x180/444444/FFFFFF?text=Bat-Film"; }}
                />
                <h3 className="text-xl font-bold text-white">{movie.title}</h3>
                <p className="text-blue-400 text-sm">{movie.genre}</p>
                <p className="text-gray-300 text-sm">{movie.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Initial Message */}
        {!isLoading && !error && recommendations.length === 0 && (
          <div className="text-center text-gray-400 mt-6">
            Summon the Bat-Computer for your next mission! 🦇
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

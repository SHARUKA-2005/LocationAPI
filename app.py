from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)

@app.route('/check_safety', methods=['POST'])
def check_safety():
    data = request.json
    latitude = data['latitude']
    longitude = data['longitude']

    # Dummy response (Replace this with ML model later)
    danger_zone = False
    if latitude > 12.95 and latitude < 12.99:  # Example condition
        danger_zone = True

    return jsonify({"danger": danger_zone})

if __name__ == '__main__':
    app.run(debug=True)




API_KEY = "5b3ce3597851110001cf6248c897f0ec156b4d188acdd3218c284e08"


# Simulated "unsafe" location (North Chennai)
lat = 13.1200  # Latitude of unsafe place
lon = 80.2700  # Longitude of unsafe place

# Example safer destination (Marina Beach, Chennai) for redirection
safe_lat = 13.0500
safe_lon = 80.2824

# OpenRouteService API for directions
url = f"https://api.openrouteservice.org/v2/directions/foot-walking?api_key={API_KEY}&start={lon},{lat}&end={safe_lon},{safe_lat}"

response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    print("Route to safer place:")
    print(data)
else:
    print("Error fetching route:", response.text)

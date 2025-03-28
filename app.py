from flask import Flask, render_template, jsonify
import pickle
import json

app = Flask(__name__)

# Load crime prediction model
try:
    with open("crime_model_one.pkl", "rb") as model_file:
        crime_model = pickle.load(model_file)
    print("✅ Model loaded successfully!")
except Exception as e:
    print("❌ Error loading model:", e)

# Serve crime locations from a JSON file
@app.route("/crime-data")
def crime_data():
    with open("crime_data.json") as f:
        data = json.load(f)
    return jsonify(data)

# Render homepage
@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)

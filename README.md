# Crime Alert & Redirection System

This project is a **Crime Alert & Redirection System** that integrates **machine learning** and **geospatial tracking** to alert users when they enter a high-crime area. The system displays a live map of **Tuticorin**, marking crime hotspots and redirecting users to safer routes.

## 🚀 Features
- **Live Location Tracking** 📍
- **Crime Hotspot Detection** 🔴
- **Real-time Alerts & Safe Redirection** ⚠️➡️
- **Machine Learning Model for Crime Prediction** 🤖
- **Interactive Crime Map with Markers** 🗺️

## 🏗️ Technologies Used
- **Frontend:** HTML, CSS, JavaScript (Leaflet.js for maps)
- **Backend:** Python (Flask)
- **Machine Learning Model:** Scikit-learn
- **Database:** JSON (for crime locations)
- **Geolocation API:** OpenStreetMap

## 🛠️ Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/crime-alert-system.git
cd crime-alert-system
```

### 2️⃣ Install Dependencies
Make sure you have Python 3 installed. Then, install the required packages:
```bash
pip install -r requirements.txt
```

### 3️⃣ Run the Flask Server
```bash
python app.py
```

### 4️⃣ Open the Website
Visit `http://127.0.0.1:5000/` in your browser.

## 📂 Project Structure
```
crime-alert-system/
│── static/
│   ├── script.js  # Frontend logic for map & alerts
│   ├── style.css  # Styling for the web page
│── templates/
│   ├── index.html  # Main UI with map
│── crime_data.json  # High-crime locations
│── app.py  # Flask backend with ML integration
│── crime_model.pkl  # Trained ML model
│── requirements.txt  # Python dependencies
│── README.md  # Documentation
```

## 📝 How It Works
1. **User opens the website** and allows location access.
2. The system **fetches real-time location** and displays a map.
3. If the user enters a **high-crime zone**, an **alert pops up**.
4. The system **suggests a safer route** and marks dangerous locations.
5. The ML model helps **predict crime risks** in new areas.

## 📌 Future Improvements
✅ Implement safer route navigation 🚗
✅ Enhance the ML model for better accuracy 📊
✅ Integrate crime data from official sources 🏛️
✅ Add user reports for real-time updates 📢

## 🤝 Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests.



---



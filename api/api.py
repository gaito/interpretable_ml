import os
import time
import random
from flask import Flask, jsonify, json, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tmp/test.db'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

class PlantProfile(db.Model):
    id = db.Column(db.Integer, nullable=False, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)
    plant_name = db.Column(db.String(100), nullable=False)
    plant_type = db.Column(db.String(100), nullable=False)

    def __init__(self, user_id, plant_name, plant_type):
        self.user_id = user_id
        self.plant_name = plant_name
        self.plant_type = plant_type

@app.route('/deleteAllPlantProfiles', methods=['DELETE'])
def delete_all_plant_profiles():
    try:
        PlantProfile.query.delete()
        db.session.commit()
        return jsonify({'message': 'All plant profiles successfully deleted'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@app.route('/getPlantProfiles/<int:user_id>', methods=['GET'])
def get_plant_profiles(user_id):
    plant_profiles = PlantProfile.query.filter_by(user_id=user_id).all()
    profiles_data = []
    for profile in plant_profiles:
        profiles_data.append({
            'id': profile.id,
            'user_id': profile.user_id,
            'plant_name': profile.plant_name,
            'plant_type': profile.plant_type
            # Include additional fields as needed
        })
    return jsonify(profiles_data)

@app.route('/addPlantProfile', methods=['POST'])
def add_plant_profile():
    user_id = 1  # Set a constant user_id
    request_data = json.loads(request.data)
    plant_name = request_data['plant_name']
    plant_type = request_data['plant_type']
    new_entry = PlantProfile(user_id=user_id, plant_name=plant_name, plant_type=plant_type)
    db.session.add(new_entry)
    db.session.commit()
    msg = "Plant profile successfully added"
    print(msg)
    response_body = {'user_id': user_id}
    return jsonify(response_body)

@app.route('/deletePlantProfile/<string:plant_name>', methods=['DELETE'])
def delete_plant_profile(plant_name):
    plant_profile = PlantProfile.query.filter_by(plant_name=plant_name).first()
    if plant_profile:
        db.session.delete(plant_profile)
        db.session.commit()
        msg = f"Plant profile with name '{plant_name}' successfully deleted"
        print(msg)
        return jsonify({'message': msg}), 200
    else:
        return jsonify({'message': f"Plant profile with name '{plant_name}' not found"}), 404


class HealthHistory(db.Model):
    id = db.Column(db.Integer, nullable=False, primary_key=True)
    plant_id = db.Column(db.Integer, nullable=False)
    disease = db.Column(db.String(100), nullable=False)
    bug = db.Column(db.String(100), nullable=False)
    confidence_interval = db.Column(db.Float, nullable=False)
    severity_rating = db.Column(db.Integer, nullable=False)

    def __init__(self, plant_id, disease, bug, confidence_interval, severity_rating):
        self.plant_id = plant_id
        self.disease = disease
        self.bug = bug
        self.confidence_interval = confidence_interval
        self.severity_rating = severity_rating

@app.route('/addHealthHistory', methods=['POST'])
def add_health_history():
    user_id = 1  # Set a constant user_id
    request_data = json.loads(request.data)
    plant_id = request_data['plant_id']
    disease = request_data['disease']
    bug = request_data['bug']
    confidence_interval = request_data['confidence_interval']
    severity_rating = request_data['severity_rating']
    new_entry = HealthHistory(plant_id=plant_id, disease=disease, bug=bug, confidence_interval=confidence_interval, severity_rating=severity_rating)
    db.session.add(new_entry)
    db.session.commit()
    msg = "Health history successfully added"
    print(msg)
    response_body = {'plant_id': plant_id}
    return jsonify(response_body)

# Your other routes and functions...

if __name__ == "__main__":
    db.create_all()
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))

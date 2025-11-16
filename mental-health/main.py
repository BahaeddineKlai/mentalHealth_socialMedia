from fastapi import FastAPI
from pydantic import BaseModel
import joblib
from fastapi.middleware.cors import CORSMiddleware

# Load the trained model
model = joblib.load("happiness_model.pkl")

app = FastAPI(title="Mental Health & Social Media API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # Allow all origins (React frontend)
    allow_credentials=True,
    allow_methods=["*"],   # Allow all HTTP methods
    allow_headers=["*"],   # Allow all headers
)

# Define request schema
class UserInput(BaseModel):
    Age: int
    Gender: str
    Daily_Screen_Time: float
    Sleep_Quality: float
    Stress_Level: float
    Days_Without_Social_Media: float
    Exercise_Frequency: float
    Social_Media_Platform: str

@app.post("/predict")
def predict_happiness(data: UserInput):
    # Convert input to dataframe row
    import pandas as pd

    df = pd.DataFrame([data.dict()])

    # Make prediction
    prediction = model.predict(df)[0]

    return {
        "Predicted_Happiness_Index": round(float(prediction), 2)
    }

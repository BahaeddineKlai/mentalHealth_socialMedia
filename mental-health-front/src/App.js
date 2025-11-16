import { useState } from "react";
import axios from "axios";

function App() {
    const [formData, setFormData] = useState({
        Age: "",
        Gender: "",
        Daily_Screen_Time: "",
        Sleep_Quality: "",
        Stress_Level: "",
        Days_Without_Social_Media: "",
        Exercise_Frequency: "",
        Social_Media_Platform: "",
    });

    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const predict = async () => {
        try {
            const res = await axios.post("http://localhost:8000/predict", formData);
            setResult(res.data.Predicted_Happiness_Index);
        } catch (err) {
            console.error(err);
            alert("Error making prediction");
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Mental Health Predictor</h1>

            <div style={styles.card}>
                {/* Form */}
                {Object.keys(formData).map((key) => (
                    <div key={key} style={styles.inputGroup}>
                        <label style={styles.label}>{key.replace(/_/g, " ")}</label>

                        {key === "Gender" ? (
                            <select name="Gender" style={styles.input} onChange={handleChange}>
                                <option value="">-- select --</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        ) : key === "Social_Media_Platform" ? (
                            <select
                                name="Social_Media_Platform"
                                style={styles.input}
                                onChange={handleChange}
                            >
                                <option value="">-- select --</option>
                                <option value="Instagram">Instagram</option>
                                <option value="Facebook">Facebook</option>
                                <option value="TikTok">TikTok</option>
                                <option value="YouTube">YouTube</option>
                                <option value="LinkedIn">LinkedIn</option>
                                <option value="X (Twitter)">X (Twitter)</option>
                            </select>
                        ) : (
                            <input
                                type="number"
                                name={key}
                                style={styles.input}
                                value={formData[key]}
                                onChange={handleChange}
                            />
                        )}
                    </div>
                ))}

                <button style={styles.button} onClick={predict}>
                    Predict Happiness
                </button>

                {result !== null && (
                    <p style={styles.result}>Predicted Happiness Index: {result}</p>
                )}
            </div>
        </div>
    );
}

const styles = {
    container: {
        width: "100vw",
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "20px",
    },
    header: {
        textAlign: "center",
        marginBottom: "20px",
    },
    card: {
        maxWidth: "600px",
        margin: "0 auto",
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    },
    inputGroup: {
        marginBottom: "15px",
    },
    label: {
        fontWeight: "bold",
        marginBottom: "5px",
        display: "block",
    },
    input: {
        padding: "10px",
        width: "100%",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    button: {
        width: "100%",
        padding: "12px",
        background: "#704ee7",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        marginTop: "10px",
    },
    result: {
        marginTop: "20px",
        fontSize: "18px",
        fontWeight: "bold",
        textAlign: "center",
    },
};

export default App;

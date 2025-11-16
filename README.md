Got it! Here’s a **super simple and clean README in French** with just the essentials to get your project running. I removed all extra explanations and just left the minimal instructions.

---

# **Prédicteur de Bonheur : Santé Mentale & Réseaux Sociaux**

Ce projet prédit l’indice de bonheur d’un utilisateur basé sur ses habitudes de réseaux sociaux et son mode de vie.
Backend : **FastAPI + modèle ML**
Frontend : **React**

---

## **Installation et lancement**

### 1️⃣ Backend

1. Se placer dans le dossier backend :

```bash
cd mental-health
```

2. Installer les bibliothèques nécessaires :

```bash
pip install pandas scikit-learn fastapi uvicorn joblib
```

3. Entraîner le modèle (si pas déjà fait) :

```bash
python train_model.py
```

4. Lancer le backend :

```bash
uvicorn main:app --reload
```

Le backend sera disponible à : `http://localhost:8000`

---

### 2️⃣ Frontend

1. Se placer dans le dossier frontend :

```bash
cd mental-health-front
```

2. Installer les dépendances :

```bash
npm install
```

3. Lancer l’application React :

```bash
npm start
```

Le frontend sera disponible à : `http://localhost:3000`

---

### 3️⃣ Utilisation

1. Ouvrir le frontend dans le navigateur.
2. Remplir le formulaire avec les informations demandées.
3. Cliquer sur **Predict Happiness** pour voir le résultat.

---

This version is **minimal, clear, and ready to follow**.

If you want, I can also make a **short English version** for GitHub so it’s bilingual. Do you want me to do that?

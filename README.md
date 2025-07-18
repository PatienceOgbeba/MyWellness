# 🩺 My Wellness Tracker

A simple and beautiful React application that helps users track their **blood pressure** and **sugar levels**, with secure user authentication powered by **AWS Amplify**.

---

## 🚀 Features

- 📋 Log and delete blood pressure & sugar entries
- 🔐 User authentication with AWS Cognito
- 💾 Data stored in localStorage
- 🎨 Simple, clean UI built with React

---

## 🛠️ Setup Instructions

Follow these steps to set up the project from scratch:

### 1. Install Amplify CLI

```bash
npm install -g @aws-amplify/cli
````

### 2. Configure AWS Amplify

```bash
amplify configure
```

> This will open your browser to sign into the AWS Console and configure IAM credentials.

### 3. Create a React App

```bash
npx create-react-app my-wellness-app
cd my-wellness-app
```

### 4. Initialize Amplify

```bash
amplify init
```

> Choose your default editor, language (JavaScript), and framework (React).

### 5. Add Authentication

```bash
amplify add auth
```

> Select the default configuration (username sign-in enabled).

### 6. Deploy the Backend

```bash
amplify push
```

### 7. Install Required Dependencies

```bash
npm install aws-amplify @aws-amplify/ui-react
```

### 8. Start the App

```bash
npm start
```

---

## 🔃 Version Control Setup (Git)

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

---

## 📂 Project Structure

```bash
my-wellness-app/
├── src/
│   ├── components/
│   │   ├── EntryForm.js
│   │   └── EntryList.js
│   ├── App.js
│   ├── App.css
│   └── aws-exports.js
├── public/
├── package.json
└── README.md
```

---

## ✅ To Do

* [ ] Store entries in DynamoDB instead of localStorage
* [ ] Add GraphQL or REST API with AWS AppSync
* [ ] Enable data sync across devices
* [ ] Deploy to AWS Amplify Hosting

---

## 📜 License

This project is open-source and free to use under the MIT License.

---


# TravelTrucks – Camper Rental Web App (Frontend)

## 🚀 Project Overview

**TravelTrucks** is a frontend web application developed for a camper rental company. The goal of the project is to provide users with a seamless and interactive experience for browsing, filtering, and booking campers online.

This project consumes a ready-made backend API for working with camper listings:  
**API Base URL**: [https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers](https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers)

---

## 📦 Tech Stack

- **React** (with Vite bundler)
- **Redux Toolkit** (for state management)
- **React Router** (for routing)
- **Axios** (for HTTP requests)
- **CSS Modules** (for styling)

---

## 📄 Pages & Routes

- `/` – Home Page  
  Contains a banner and a call-to-action button “View Now”.

- `/catalog` – Catalog Page  
  Displays all available campers with filter options and pagination.

- `/catalog/:id` – Camper Details Page  
  Includes full details, image gallery, reviews, and a booking form.

---

## 🔧 API Endpoints

- `GET /campers` – Fetch all campers (supports optional filtering)
- `GET /campers/:id` – Fetch camper details by ID

---

## 📥 Installation & Launch

```bash
git clone https://github.com/i3oi3ka/TravelTrucks.git
cd traveltrucks

npm install
npm run dev
```

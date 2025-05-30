# Public Registry API producer/consumer Demo App

A  demo app for simulating a public registry platform using  mock data. Features include producing and consuming 
REST APIs for persons, addresses, and  documents

## 🚀 Quick Start
---
⚙️ Requirements

To run this project locally, make sure you have the following installed:

Node.js v18 or higher – https://nodejs.org

npm (comes with Node.js)

MySQL 8.x (or compatible) – https://www.mysql.com

You will also need to configure a local database and connection string.

---
### 1. Clone & Install
```bash
git clone https://github.com/fr44lancer/demo-simple-api.git
```
```bash
cd demo-simple-api
```
```bash
npm install
```

### 2. Environment Setup
Copy example env and configure your MySQL DB:
```bash
cp .env.example .env
```

Update `.env`:
```
DATABASE_URL="mysql://user:pass@localhost:port/dbname" //DB connection string
PRODUCER_API_BASE=  //where API is exposed to others (acts as producer)
CONSUMER_API_BASE= //external API consume (acts as consumer)
NEXT_PUBLIC_X_ROAD_CLIENT_HEADER_VALUE=  //custom header as X-ROAD-CLIENT
```

### 3. App setup (migrations etc.)
```bash
npm run setup
```

### 4. Start the Dev Server
```bash
npm run dev -p 3000
```

---

## 📂 Project Structure

```
├── app
│   ├── person            # Person CRUD UI
│   ├── address           # Address UI
│   ├── document          # Document UI
│   ├── api
│   │   ├── person        # REST API routes
│   │   ├── v1            # Public-facing endpoints
│   │   └── generate
│   └── layout.tsx       # Root layout with Sidebar
├── components            # Reusable UI elements
├── lib                   # Prisma client wrapper
├── prisma
│   └── schema.prisma    # Data models
└── types                 # Shared TypeScript types
```

---

## 📡 API Endpoints

### `/api/v1/persons`
Returns full person list with address + documents.

### `/api/v1/get-persons-by-psn?psn=xxxx`
Query people by PSN.

### `/api/v1/addresses`
Returns list of all addresses.

---

## 🛠 Scripts

```bash
npm run dev          # Start dev server
npm run build        # Build for production
 npx next start -p 3000        # Start for production
npx prisma studio    # View/edit DB in browser
```

---

## 📃 License
MIT — use this for demos, education, and internal testing.

---

## 🤝 Contributing
Pull requests welcome. Please open issues for bugs, suggestions, or docs.


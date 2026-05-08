# RUNNER TOWN 🏃‍♂️🏙️

Runner Town is a location-based land-capture game built with React Native and Node.js. Runners can "capture" territories by physically running around them, creating polygons on a map that mark their ownership of the land.

## ✨ Features
- **Real-time Tracking:** Use GPS to track your run and visualize your path.
- **Land Capture:** Close loops in your path to claim new territories.
- **Secure Authentication:** JWT-based signup/login with persistent sessions.
- **Interactive Map:** View your own territories and track your progress in real-time.

## 🛠️ Tech Stack
- **Frontend:** React Native (Expo), TypeScript, NativeWind (Tailwind CSS), React Navigation, React Native Maps, Expo Location.
- **Backend:** Node.js, Express, TypeScript (ESM), Prisma 7, PostgreSQL (PostGIS).
- **Database:** PostgreSQL with PostGIS extension (via Docker).

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Expo Go](https://expo.dev/go) app on your physical device (required for GPS testing)

### 1. Database Setup
The project uses Docker to run a PostGIS-enabled PostgreSQL instance.

```bash
cd backend
docker-compose up -d
```

### 2. Backend Setup
1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Configure environment variables in `backend/.env`:
   ```env
   DATABASE_URL="postgresql://runner:runnerpassword@localhost:5432/runnertown?schema=public"
   PORT=3000
   JWT_SECRET="your_secret_key"
   ```
3. Run migrations and generate Prisma client:
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### 3. Frontend Setup
1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. **Update API Endpoint:** Open `frontend/src/services/api.ts` and replace the IP address with your local machine's IP (e.g., `http://192.168.1.5:3000/api`).
3. Start Expo:
   ```bash
   npm start
   ```
4. Scan the QR code with the **Expo Go** app on your phone.

## 🏗️ Project Structure
```text
RUNNER TOWN/
├── backend/
│   ├── src/
│   │   ├── controllers/   # Business logic (Auth, Territory)
│   │   ├── middleware/    # Auth guards
│   │   ├── routes/        # API Endpoints
│   │   └── utils/         # Prisma client, Auth helpers
│   └── prisma/            # Database schema
└── frontend/
    ├── src/
    │   ├── context/       # Auth session management
    │   ├── screens/       # Login, Signup, Home (Map)
    │   ├── services/      # Axios API configuration
    │   └── navigation/    # App routing
    └── App.tsx            # Main entry point
```
## 📝 Roadmap
- [x] **Project Setup & Auth:** App navigation, Login/Signup, AuthContext.
- [x] **Map Screen:** Live location tracking and polyline drawing.
- [x] **Run Tracking:** Start/Stop/Timer/Distance.
- [x] **Territory Capture:** Loop detection and polygon filling.
- [x] **Profile Screen:** Statistics display.
- [x] **Leaderboard:** Ranking list.

# Idle-Forge Backend

Node.js + Express + MongoDB backend for the Idle-Forge AI platform.

## Setup

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Create a `.env` file:
   \`\`\`
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/idle-forge
   JWT_SECRET=your_secret_key
   FRONTEND_URL=http://localhost:3000
   \`\`\`

3. Run the server:
   \`\`\`bash
   npm run dev
   \`\`\`

## API Endpoints

- **POST /api/auth/signup**: Register a new user
- **POST /api/auth/login**: Login user
- **GET /api/rooms**: List all studios
- **POST /api/bookings**: Create a new booking
- **POST /api/locks/:id/unlock**: Unlock smart cabinet (requires active booking)

## Deployment

This backend is ready to be deployed on services like Heroku, Render, or DigitalOcean App Platform.
Ensure you have a MongoDB Atlas connection string for the `MONGO_URI` in production.

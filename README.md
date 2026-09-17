# Sprint 10 - The Data Storm

## Track B - Fullstack Developers

A simple Express.js backend application integrated with MongoDB Atlas
using Mongoose for persistent data storage.

The project demonstrates CRUD operations, MongoDB relationships,
population of referenced documents, and fetching recent posts.

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- CORS
- Postman

---

## Project Structure

```text
backend/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── postController.js
│   │   └── userController.js
│   ├── models/
│   │   ├── Post.js
│   │   └── User.js
│   ├── routes/
│   │   ├── postRoutes.js
│   │   └── userRoutes.js
│   ├── app.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
└── package-lock.json
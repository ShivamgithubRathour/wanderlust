# 🌍 Wanderlust - Global Accommodation Explorer

**Wanderlust** is a full-stack web application that allows users to explore and manage unique accommodation listings worldwide. It is built using **Node.js**, **Express.js**, **MongoDB**, and **EJS**, with a focus on smooth database operations, dynamic rendering, and user-friendly interaction.

## 🚀 Key Features

- 🌐 Explore diverse accommodation listings
- ➕ Add, edit, and delete listings
- 📝 View detailed property information
- 💾 MongoDB-powered persistent storage
- 📱 Responsive design using Bootstrap 5

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript Templates), Bootstrap 5
- **Database**: MongoDB with Mongoose
- **Others**: dotenv, method-override, express-validator

## ⚙️ Installation & Usage

1. **Clone the repository**  
   `git clone https://github.com/your-username/wanderlust.git && cd wanderlust`

2. **Install dependencies**  
   `npm install`

3. **Create `.env` file**  
   Add your MongoDB URI and port:
MONGODB_URI=your_mongodb_connection_string
PORT=3000


4. **Seed the database (optional)**  
`node seeds/index.js`

5. **Run the application**  
`npm start`  
Access it at: [http://localhost:3000](http://localhost:3000)

## 🧪 Example Listings

- 🏖️ Cozy Beachfront Cottage (Hawaii, USA)
- 🏢 Modern Loft in Downtown (Berlin, Germany)
- 🏞️ Mountain Retreat (Himachal, India)

## 🧩 Project Structure (Simple Overview)

- `models/` - Mongoose Schemas  
- `routes/` - Express Route Handlers  
- `views/` - EJS Templates  
- `public/` - Static Files (CSS/JS/Images)  
- `seeds/` - Sample Listing Data  
- `app.js` - Main Server File

## 🛤️ Future Enhancements

- 🔐 User authentication system
- 🌍 Map integration (Mapbox or Leaflet)
- 🧮 Advanced filtering by country, type, amenities, and price range
- 🔄 Pagination and sorting for better listing navigation
  
## 🤝 Contribution Guide

Contributions are welcome!  
1. Fork this repo  
2. Create a branch: `git checkout -b feature-name`  
3. Commit changes: `git commit -m "Description"`  
4. Push and open a PR


👨‍💻 Made with ❤️ by [Shivam Rathour](https://github.com/username)



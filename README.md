

# Coco Chat  

Coco Chat is a real-time chatting application that allows users to communicate seamlessly. Built with a modern tech stack, it features user-friendly designs, secure communication, and responsive functionality for desktop and mobile users.  

🚀 **Live Project Link**: [Coco Chat](https://coco-chat.onrender.com)  

---

## Features  
- **Real-Time Messaging**: Instant communication powered by Socket.io.  
- **User Authentication**: Secure login and registration using encrypted user data stored in MongoDB.  
- **Search Users**: Find other users easily within the app.  
- **Notifications**: Get notified about new messages and activities.  
- **Profile Management**: Update user profiles directly from the app.  
- **Responsive Design**: Fully compatible with mobile and desktop devices.  

---

## Tech Stack  
- **Frontend**: React.js, Chakra UI  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (with encrypted data storage)  
- **Real-Time Communication**: Socket.io  

---

## Installation and Setup  

### Prerequisites  
- Node.js and npm installed on your system  
- MongoDB server running locally or remotely  

### Steps  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/Anan014d/Coco.git
   
   cd Coco  
2.Install dependencies for both frontend and backend:
  cd mern-chat-app/backend  
  npm install  
  cd ../frontend  
  npm install  
3.Configure environment variables in the backend:
Create a .env file in the backend folder with the following values:
  PORT=5000  
  MONGO_URI=<your_mongodb_connection_string>  
  JWT_SECRET=<your_secret_key>  
  SOCKET_PORT=<socket_server_port>  
4.Run the application:
Start the backend server:
  cd backend  
  npm start  
  Start the frontend development server:
  cd frontend  
  npm start  
5.Open the application in your browser:
Navigate to http://localhost:3000.




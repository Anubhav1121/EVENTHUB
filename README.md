# 🎓 EduFlow — College Event Management System

A modern, production-ready full-stack web application for managing college events, registrations, payments, and more.

## ✨ Features

| Feature | Description |
|---------|-------------|
| **JWT Authentication** | Secure login/register with bcrypt password hashing |
| **Role-Based Access** | Admin, Organizer, and Student dashboards |
| **Event Management** | Full CRUD with categories, pricing, and seat limits |
| **Payment Integration** | Razorpay (with demo/sandbox mode) |
| **PDF Receipts** | Downloadable payment receipts |
| **QR Code Entry** | QR codes generated for event registration |
| **Certificates** | PDF participation certificates for past events |
| **Feedback & Ratings** | Star ratings and reviews for attended events |
| **Waitlist System** | Auto-promotion when seats open up |
| **Live Chat** | Socket.io real-time campus chat |
| **Analytics Dashboard** | Charts for registrations, events, and revenue |
| **Email Notifications** | Registration/payment confirmations (optional SMTP) |
| **Dark Mode** | Toggle between light and dark themes |
| **Responsive Design** | Mobile-first, works on all devices |

## 🛠️ Tech Stack

- **Frontend:** Vanilla JavaScript, HTML5, CSS3 (Glassmorphism UI)
- **Backend:** Node.js, Express.js (MVC Architecture)
- **Database:** MySQL
- **Auth:** JWT (jsonwebtoken) + bcrypt
- **Payments:** Razorpay
- **Real-time:** Socket.io
- **PDFs:** PDFKit
- **QR Codes:** qrcode
- **Charts:** Chart.js
- **Email:** Nodemailer

## 📁 Folder Structure

```
college event/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database connection pool
│   ├── controllers/
│   │   ├── authController.js     # Login, register, forgot/reset password
│   │   ├── eventController.js    # CRUD events with filters
│   │   ├── registrationController.js  # Register, cancel, waitlist
│   │   ├── paymentController.js  # Razorpay orders & verification
│   │   ├── receiptController.js  # PDF receipt generation
│   │   ├── feedbackController.js # Ratings & reviews
│   │   ├── qrController.js      # QR code generation & verification
│   │   ├── certificateController.js  # PDF certificates
│   │   ├── notificationController.js # Email notifications
│   │   └── statsController.js    # Analytics & dashboard data
│   ├── middleware/
│   │   ├── auth.js               # JWT verification middleware
│   │   └── validate.js           # Input validation (express-validator)
│   ├── routes/
│   │   ├── auth.js, events.js, registrations.js
│   │   ├── payments.js, feedback.js, stats.js
│   │   ├── qr.js, receipts.js, certificates.js
│   ├── database.js               # DB init, migrations, seed data
│   ├── server.js                 # Express app entry point
│   ├── schema.sql                # Full database schema
│   ├── .env                      # Environment variables
│   └── .env.example              # Template
├── frontend/
│   ├── css/
│   │   └── style.css             # Complete design system
│   ├── js/
│   │   ├── api.js                # API client with JWT
│   │   ├── auth.js               # Auth UI logic
│   │   ├── chat.js               # Socket.io chat widget
│   │   └── dashboard.js          # Full dashboard rendering
│   ├── index.html                # Landing + Auth page
│   └── dashboard.html            # Dashboard SPA
├── package.json
└── README.md
```

## 🚀 Setup Instructions

### Prerequisites
- **Node.js** v16+ ([download](https://nodejs.org))
- **MySQL** v8+ running on localhost:3306

### Step 1: Clone & Install
```bash
cd "college event"
npm install
```

### Step 2: Configure Environment
Edit `backend/.env` with your settings:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=root
DB_NAME=college_event_db
JWT_SECRET=your_secret_key_here
```

### Step 3: Start the Server
```bash
npm start
```
The server will:
1. ✅ Create the database automatically
2. ✅ Create all 8 tables
3. ✅ Seed default users (admin, org1, student1)
4. ✅ Start on http://localhost:3000

### Step 4: Open in Browser
Navigate to **http://localhost:3000**

## 🔐 Default Login Credentials

| Role | Username | Password |
|------|----------|----------|
| Admin | `admin` | `admin@123` |
| Organizer | `org1` | `orgpass` |
| Student | `student1` | `studpass` |

## 💳 Payment Integration

Razorpay runs in **demo/sandbox mode** by default. Payments are simulated with a "Confirm Payment" button.

For real payments:
1. Create a Razorpay account at https://dashboard.razorpay.com
2. Get your API keys
3. Update `backend/.env`:
```env
RAZORPAY_KEY_ID=rzp_test_your_key
RAZORPAY_KEY_SECRET=your_secret
```

## 📧 Email Notifications (Optional)

Emails are silently skipped if SMTP isn't configured. To enable:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

## 📡 API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/login` | No | Login with JWT |
| POST | `/api/auth/register` | No | Register new user |
| POST | `/api/auth/forgot-password` | No | Request password reset |
| POST | `/api/auth/reset-password` | No | Reset password with token |
| GET | `/api/events` | No | List events (with filters) |
| GET | `/api/events/:id` | No | Event details |
| POST | `/api/events` | JWT | Create event |
| PUT | `/api/events/:id` | JWT | Update event |
| DELETE | `/api/events/:id` | JWT | Delete event |
| GET | `/api/registrations` | JWT | All registrations |
| POST | `/api/registrations` | JWT | Register for event |
| DELETE | `/api/registrations/:eid/:user` | JWT | Cancel registration |
| POST | `/api/payments/create-order` | JWT | Create payment order |
| POST | `/api/payments/verify` | JWT | Verify payment |
| GET | `/api/receipts/:paymentId` | JWT | Download PDF receipt |
| GET | `/api/certificates/:eid/:user` | JWT | Download certificate |
| POST | `/api/feedback` | JWT | Submit rating |
| GET | `/api/feedback/event/:id` | No | Event reviews |
| GET | `/api/qr/registration/:id` | JWT | Get QR code |
| GET | `/api/stats` | JWT | Dashboard analytics |

---

Built with ❤️ using Node.js, Express, MySQL, and modern JavaScript.

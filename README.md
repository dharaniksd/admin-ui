# Admin UI Dashboard

A modern Angular 21 admin dashboard application with authentication, performance monitoring, sales analytics, and real-time notifications.

## Features

- **🔐 Authentication System**: Login functionality with dummy JSON file (JWT-ready architecture)
- **📊 Dashboard**: Comprehensive admin interface with performance metrics
- **📈 Sales & Loss Analysis**: Interactive charts powered by Chart.js
- **🔔 Notifications**: Real-time notification system with multiple alert types
- **👤 User Management**: Role-based authentication (Admin/User roles)
- **📱 Responsive Design**: Mobile-friendly interface

## Demo Credentials

- **Admin User**: `admin` / `admin123`
- **Regular User**: `user` / `user123`

## Tech Stack

- Angular 21
- TypeScript 5.9
- Chart.js & ng2-charts for data visualization
- SCSS for styling
- Vite for development server

## Getting Started

### Prerequisites

- Node.js v20 or higher
- npm v10 or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dharaniksd/admin-ui.git
cd admin-ui
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/admin-ui-app` directory.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── login/              # Login page
│   │   └── dashboard/          # Dashboard components
│   │       ├── header/         # Top navigation bar
│   │       ├── sidebar/        # Side navigation menu
│   │       ├── monitoring/     # Performance metrics cards
│   │       ├── sales-graph/    # Sales & Loss chart
│   │       └── notifications/  # Notification panel
│   ├── guards/
│   │   └── auth-guard.ts       # Route protection
│   ├── services/
│   │   └── auth.ts             # Authentication service
│   └── app.routes.ts           # Application routing
├── public/
│   └── data/
│       └── users.json          # Dummy user data
└── styles.scss                 # Global styles
```

## Features in Detail

### Authentication
- Simple login with username/password
- Session management using localStorage
- Route guards to protect dashboard access
- JWT-ready architecture for future backend integration

### Dashboard Components
- **Performance Monitoring**: Real-time metrics for revenue, users, orders, and conversion rate
- **Sales Analysis**: Interactive line chart showing sales and loss trends over 12 months
- **Notifications**: Categorized alerts (success, warning, error, info) with read/unread status

### Future Enhancements (JWT Implementation)
The authentication system is designed to easily integrate with JWT:
1. Update `AuthService` to call your backend API
2. Store JWT tokens instead of user objects
3. Add token refresh logic
4. Implement HTTP interceptor for adding tokens to requests

## Screenshots

### Login Page
![Login Page](https://github.com/user-attachments/assets/a102bd9a-5655-4e93-a2d8-9f305b189ff9)

### Dashboard
![Dashboard](https://github.com/user-attachments/assets/59a86510-7778-4670-b5a5-4e64571c5ee0)

## Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Run Angular CLI commands
npx ng [command]
```

## License

MIT License

# Beauty Glow Blog 🌟

A modern, responsive beauty blog application with automatic content publishing from Google Sheets, built with React, TypeScript, Go, and MongoDB.

## ✨ Features

### 🎨 Frontend (React + TypeScript)

- **Modern UI**: Beautiful, responsive design with Tailwind CSS
- **Blog Management**: Full CRUD operations for blog posts
- **Search & Filter**: Search posts by keywords and filter by category
- **Admin Dashboard**: Manage posts, view statistics, and analytics
- **Real-time Updates**: Live data synchronization with backend

### 🔧 Backend (Go + MongoDB)

- **RESTful API**: Clean and efficient API endpoints
- **MongoDB Integration**: Scalable database architecture
- **Google Sheets Sync**: Automatic content synchronization
- **Telegram Integration**: Push notifications and content approval via Telegram

### 🤖 Auto-Publishing System

- **Google Sheets Integration**: Monitor Google Sheets for new posts every 10 seconds
- **Telegram Commands**: Approve or reject posts via Telegram
- **Automatic Posting**: Approved posts are automatically published to the blog
- **Status Tracking**: Track post status (Ready, Posted, Error) in Google Sheets

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- Go (v1.21 or higher)
- MongoDB (running locally or Atlas)
- Google Cloud Console account (for Sheets API)
- Telegram Bot Token

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd beauty-glow-blog-client
```

### 2. Setup (React Client)

#### Install dependencies

```bash
npm install
```

#### Set up environment variables

Create a `.env.local` file:

```env
VITE_SERVER_DOMAIN=your_server_domain
```

#### Start the development server

```bash
npm run dev
```

The application will start on `http://localhost:3000`

## 📁 Project Structure

```
test-task/
├── beauty-glow-blog-client/        # React frontend
│   ├── src/
│   │   ├── api/                    # API client
│   │   ├── components/             # React components
│   │   ├── pages/                  # Page components
│   │   ├── hooks/                  # Custom hooks
│   │   └── lib/                    # Utilities
│   ├── public/                     # Static assets
│   └── package.json
│
└── beauty-glow-blog-server/        # Go backend
    ├── controllers/                # Request handlers
    ├── models/                     # Data models
    ├── routes/                     # API routes
    ├── config/                       # Config & DB
    ├── service/                    # External services
    ├── module/                     # Business logic
    └── main.go                     # Entry point
```

## 🔌 API Endpoints

### Posts

- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get post by ID
- `POST /api/posts` - Create a new post
- `PUT /api/posts/:id` - Update a post
- `DELETE /api/posts/:id` - Delete a post
- `GET /api/posts/filter?category=...` - Filter by category
- `GET /api/posts/search?q=...` - Search posts
- `GET /api/posts/related?currentPostId=...&category=...&limit=...` - Get related posts

### Webhooks

- `POST /webhook/telegram` - Telegram webhook handler

## 📊 Google Sheets Integration

### Sheet Structure

The Google Sheet should have the following columns:

- Column A: Post ID
- Column B: Title
- Column C: Excerpt
- Column D: Content
- Column E: Author
- Column F: Category
- Column G: Tags
- Column H: Image URL
- Column I: Status (Ready, Posted, Error)
- Column J: Telegram Command
- Column K: Post URL (auto-generated)

### Post Status Flow

1. **Ready**: Post is ready for review
2. **Posted**: Post has been approved and published
3. **Error**: Post has been rejected or has errors

## 🤖 Telegram Commands

### Approve a Post

Send the Telegram command (e.g., `post123`) to approve and publish the post.

### Reject a Post

Send `reject post123` to reject the post and mark status as "Error".

## 🎨 Features in Detail

### Home Page

- Featured blog posts slider
- Category filtering
- Search functionality
- Responsive grid layout

### Blog Post Page

- Full post content
- Related posts section
- Reading time estimation
- Social sharing capabilities

### Admin Dashboard

- Post statistics
- Create, edit, delete posts
- Category and tag management
- Real-time updates

## 🛠️ Technologies Used

### Frontend

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Shadcn UI
- Axios

### Backend

- Go (Golang)
- Gin Web Framework
- MongoDB
- Google Sheets API
- Telegram Bot API

## 📝 Development

### Adding a New Post Category

1. Update the categories list in `post.api.ts`
2. Add the category to the Google Sheet
3. Backend will automatically pick up new categories

### Customizing Styles

The project uses Tailwind CSS. Modify `src/index.css` or individual component styles.

### Modifying API Endpoints

Update the routes in `beauty-glow-blog-server/routes/blog_routes.go`

## 🚀 Deployment

### Frontend

```bash
npm run build
# Deploy the dist folder to your hosting provider
```

### Backend

```bash
go build -o beauty-blog-server main.go
# Run the binary on your server
```

Built with ❤️ using React, TypeScript, Go, and MongoDB

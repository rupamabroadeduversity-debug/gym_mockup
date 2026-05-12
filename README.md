# ApexFit Gym Website

Production-ready gym and fitness center website built with React, Vite, Tailwind CSS, Framer Motion, React Router, and an Express API.

## Stack

- Frontend: React, Vite, Tailwind CSS, Framer Motion, React Router DOM
- Backend: Node.js, Express, Nodemailer, Helmet, CORS, Compression
- SEO: dynamic titles/meta, Open Graph, Twitter cards, JSON-LD schema, sitemap, robots, canonical URLs

## Setup

```bash
npm run install:all
cp server/.env.example server/.env
npm run dev
```

Frontend: `http://localhost:5173`
Backend: `http://localhost:5050`

## Environment

Set these in `server/.env`:

```bash
PORT=5050
CLIENT_URL=http://localhost:5173
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
MAIL_FROM="ApexFit <hello@apexfit.example>"
MAIL_TO=leads@apexfit.example
```

Email sending is optional in local development. If SMTP variables are missing, form submissions are validated and logged without sending.

## Deployment

### Frontend on Vercel

- Root directory: `client`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `VITE_API_URL=https://your-backend-url`

### Backend on Render or Railway

- Root directory: `server`
- Build command: `npm install`
- Start command: `npm start`
- Add the environment variables from `server/.env.example`

## API

- `POST /api/contact`
- `POST /api/newsletter`
- `GET /api/blogs`
- `GET /api/blogs/:slug`
- `GET /api/health`

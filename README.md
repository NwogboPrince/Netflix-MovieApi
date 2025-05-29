# Social Media Dashboard - Movie Preview App

This project is a simple movie preview web app that displays trending movies using [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api). It features a Node.js/Express backend and a responsive frontend.

---

## Features

- Responsive dashboard UI
- Trending movies preview (fetched from TMDb)
- Secure backend with rate limiting and Content Security Policy
- Environment variable support for API keys
- Ready for deployment on Render or similar platforms

---

## Folder Structure

```
FRONT - END/
└── social media dashboard/
    ├── server.js
    ├── .env
    ├── Movie.html
    ├── index.html
    ├── style.css
    ├── Script.js
    ├── default-movie.png
    ├── IMAGE/
    └── node_modules/
```

---

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/yourusername/your-repo-name.git
cd "FRONT - END/social media dashboard"
```

### 2. Install dependencies

```sh
npm install
```

### 3. Set up your TMDb API key

- [Get a TMDb API key](https://www.themoviedb.org/settings/api)
- Create a `.env` file in the project root:

  ```
  TMDB_API_KEY=your_actual_tmdb_api_key
  ```

### 4. Run the server

```sh
node server.js
```

- Visit [http://localhost:3000/Movie.html](http://localhost:3000/Movie.html) in your browser.

---

## Deployment

### Deploying on Render

1. Push your code to GitHub.
2. Create a new Web Service on [Render](https://dashboard.render.com/).
3. Connect your GitHub repo.
4. Set build/start commands:
   - Build Command: `npm install`
   - Start Command: `node server.js`
5. Add your TMDB_API_KEY in the Render dashboard under "Environment".
6. Deploy!

---

## Security

- API key is stored in `.env` (never committed to git)
- Rate limiting to prevent abuse
- Content Security Policy to mitigate XSS
- 404 handler for unknown routes

---

## .gitignore

```
node_modules/
.env
.DS_Store
npm-debug.log
```

---

## License

This project is for educational/demo purposes only.  
Movie data provided by [TMDb](https://www.themoviedb.org/).

---

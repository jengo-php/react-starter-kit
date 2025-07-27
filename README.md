# Jengo React Starter Kit

A modern **CodeIgniter 4 + React** starter template powered by **Inertia.js**, built to kickstart your next full-stack project with zero boilerplate hassle.

> This starter kit uses [React](https://reactjs.org/) with [Webpack](https://webpack.js.org/) and [Tailwind CSS](https://tailwindcss.com/) pre-configured. Backend powered by [CodeIgniter 4](https://codeigniter.com/), bridged by [Inertia.js](https://inertiajs.com/).

---

## 🚀 Getting Started

### 1. Create a New Project

```bash
composer create-project jengo/react-start-kit my-app
```

### 2. Install Dependencies

```bash
cd my-app

# Install PHP dependencies
composer install

# Install JS dependencies
npm install
```

### 3. Run Dev Server

```bash
npm run dev
```

By default, the development server runs at [http://localhost:8080](http://localhost:8080).

> Internally this runs `php spark serve`.

---

## 🧩 Included Features

- ✅ React 19
- ✅ Vite for fast builds
- ✅ Tailwind CSS
- ✅ Inertia.js (React adapter)
- ✅ Clean project structure
- ✅ TypeScript-ready (opt-in)
- ✅ Example routing + layout system

---

## 📁 Project Structure

```
├── app/                   # CI4 controllers & config
├── public/
│   └── index.php
├── resources/
│   └── js/
│       ├── App.jsx        # React app entry point
│       ├── Pages/         # Inertia pages
│       └── Shared/        # Shared layouts/components
├── webpack.config.js
├── composer.json
├── package.json
```

---

## 🧱 Based On

This starter is powered by:

- [CodeIgniter 4](https://codeigniter.com/)
- [React](https://reactjs.org/)
- [Inertia.js](https://inertiajs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Webpack](https://webpack.js.org/)

---

## 🙌 Contributing

Feel free to fork and improve. PRs welcome — especially for auth scaffolding, presets, or useful utilities.

---

## 🧪 License

This project is under a MIT License

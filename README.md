# Sales Dashboard Assignment

A responsive React sales dashboard built with Vite, Tailwind CSS, Chart.js, and a public users API. This project demonstrates a clean dashboard UI with analytics widgets and a functional user management table.

## 🚀 Setup

### Requirements

- Node.js 18+ recommended
- npm (included with Node.js)

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local URL shown by Vite in your browser.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Lint the project

```bash
npm run lint
```

## 💡 Implementation Overview

### Architecture

The project is organized using a feature-based structure to keep dashboard and user functionality separated:

- `src/app/App.jsx` - main application layout and route composition
- `src/features/dashboard/` - dashboard page and visual widgets
- `src/features/users/` - user table and API-driven data logic
- `src/shared/layout/` - reusable layout components like `Header` and `Sidebar`
- `src/styles/index.css` - Tailwind base styles and custom utilities

### UI and layout

- Tailwind CSS is used for responsive styling across mobile, tablet, and desktop
- The dashboard layout includes a sidebar and header with a main content panel
- Cards and charts adapt using responsive grid classes rather than separate mobile views

### Data and behavior

- The sales dashboard widgets display summary metrics, charts, and product statistics
- The user table fetches data from a public API:
  - `https://jsonplaceholder.typicode.com/users`
- The user table supports:
  - Search by name or email
  - Sort by user name ascending/descending
  - Filter by city
  - Loading state while fetching data
  - Error handling with a retry option

### Charts

- `Chart.js` and `react-chartjs-2` power the dashboard visuals
- Each chart component is responsible for its own data configuration and rendering
- Chart styling is kept consistent with the dashboard theme

### Component responsibility

- `features/dashboard/components/` contains reusable dashboard widgets
- `features/dashboard/pages/Dashboard.jsx` assembles the page from widgets
- `features/users/components/UserTable.jsx` manages API calls, filtering, sorting, and UI state
- `shared/layout/` contains shell components used across the app

## 📁 Project Structure

```text
src/
  app/
    App.jsx
  features/
    dashboard/
      components/
        DashboardWidgets.jsx
        RevenueChart.jsx
        StatsGrid.jsx
        TopProducts.jsx
        VisitorInsights.jsx
        index.js
      pages/
        Dashboard.jsx
      index.js
    users/
      components/
        UserTable.jsx
      index.js
  shared/
    layout/
      Header.jsx
      Sidebar.jsx
      index.js
  styles/
    index.css
  main.jsx
```

## ✅ Key Features

- Responsive sales dashboard with summary cards and chart widgets
- User table with search, sort, and city filters
- Error and loading states for remote user data
- Clean feature-based structure for easy maintenance
- Production-ready build and lint scripts

## 📌 Notes

- The app uses browser fetch for users data; no backend is required
- Layout scales with Tailwind responsive utilities for all screen sizes
- The project is designed for demo presentation and code review readiness

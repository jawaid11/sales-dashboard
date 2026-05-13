# Sales Dashboard Assignment

A responsive React sales dashboard built with Vite, Tailwind CSS, Chart.js, and a public users API. The UI follows the provided dashboard reference while adding a functional user management table with search, city filtering, sorting, loading, and error states.

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Chart.js with `react-chartjs-2`
- React Icons
- Fetch API for remote data
- ESLint

## Features

- Responsive dashboard layout for desktop, tablet, and mobile
- Sidebar navigation and top header matching the dashboard theme
- Sales summary stat cards
- Visitor insights line chart
- Revenue bar chart
- Customer satisfaction chart
- Target vs reality chart
- Sales mapping by country visual
- Volume vs service level chart
- Top products table
- User management table powered by `https://jsonplaceholder.typicode.com/users`

## User Table Functionality

The user table satisfies the assignment objective:

- Fetches users from the public API
- Displays:
  - Name
  - Email
  - Company Name
  - City
- Searches by name or email
- Sorts name A-Z and Z-A
- Filters by city
- Handles loading state
- Handles error state with retry action
- Supports horizontal scrolling on small screens

## Project Structure

The app uses a feature-oriented structure so it can scale beyond a flat `components` folder.

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

## Architectural Notes

- `features/dashboard` owns dashboard-specific visual components and the page composition.
- `features/users` owns API-driven user table behavior.
- `shared/layout` contains reusable shell components such as `Header` and `Sidebar`.
- Barrel exports are used for cleaner imports and easier future refactors.
- Chart configuration is kept close to the component that renders each chart.
- The layout uses Tailwind responsive breakpoints instead of separate mobile components.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## Verification

Before submitting, run:

```bash
npm run lint
npm run build
```

Both commands should pass successfully.

## Responsive Behavior

- Mobile: dashboard cards stack in one column and tables scroll horizontally.
- Tablet: cards use a 6-column grid.
- Desktop: cards use the full 12-column dashboard layout.
- Fixed desktop card heights are only applied at large breakpoints to avoid mobile clipping.

## API

Users are loaded from:

```text
https://jsonplaceholder.typicode.com/users
```

The app uses the browser Fetch API and gracefully displays a retry UI if the request fails.

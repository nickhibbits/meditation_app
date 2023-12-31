# Meditation App

Web application built in Next.js designed to help users engage in meditation sessions.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)

## Features

The user can:

- Engage in a meditation session.
- Set the theme/location and duration of the session.
- Utilize a timer to start or stop the session.
- Create a personal account to track their total time meditated.

## Technologies

This project is built using the following technologies:

- Next 13
  - leverages server components for optimzied data fetching and rendering.
- TypeScript
- SCSS
- MongoDB

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/mindful-moments.git
```

2. Set up MongoDB

- [Install MongDB](https://www.mongodb.com/docs/manual/installation/).
- Replace .env_example with .env and generate your own NEXTAUTH_SECRET by following the [NextAuth docs](https://next-auth.js.org/configuration/options#secret).

3. Run the app:

```bash
npm run dev
```

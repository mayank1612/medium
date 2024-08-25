# Medium Clone

This project is a clone of Medium, designed to explore the capabilities of Cloudflare Workers, with a focus on deploying scalable and efficient web applications.

## Project Overview

- **Frontend**: Built using [Vite](https://vitejs.dev/) and [React](https://reactjs.org/), styled with [Tailwind CSS](https://tailwindcss.com/), and deployed on [Vercel](https://vercel.com/). Vite offers a fast development environment, and React's component-based architecture ensures efficient UI rendering. Tailwind CSS allows for rapid styling with utility-first classes, ensuring a responsive design.

- **Backend**: Deployed on [Cloudflare Workers](https://workers.cloudflare.com/), a serverless platform providing low-latency, globally distributed applications. The backend utilizes [PostgreSQL](https://www.postgresql.org/) from [Aiven](https://aiven.io/) as the database, with [Prisma](https://www.prisma.io/) handling the ORM and connection pooling. Prisma is chosen for its efficient connection management, especially crucial when working with the stateless nature of Cloudflare Workers.

- **Purpose**: This project serves as a hands-on exploration of the integration between Cloudflare Workers and Prisma, focusing on the challenges and advantages of building serverless applications.

## Features

- **Authentication**: Supports user sign-in and sign-up functionality.
- **Blog Creation**: Allows users to create and publish blog posts.

## Access the Project

You can access the live project here: [Medium Clone](https://medium-ruddy-chi.vercel.app/signin)

### Sample Login Credentials

- **Name**: Mayank
- **Username**: mayank@gmail.com
- **Password**: mayank

## Getting Started

To run the project locally, follow these steps:

### Frontend

1. Clone the repository.
2. Navigate to the `frontend` directory.
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

### Backend

1. Navigate to the `backend` directory.
2. Deploy to Cloudflare Workers by following the [Cloudflare Workers documentation](https://developers.cloudflare.com/workers/).

## Technologies Used

- **Frontend**: Vite, React, Tailwind CSS
- **Backend**: Cloudflare Workers, PostgreSQL (Aiven), Prisma
- **Deployment**: Vercel (Frontend), Cloudflare Workers (Backend)

## Project Structure

- **Frontend**: Contains the React application.
- **Backend**: Contains the serverless functions and API routes.
- **Common**: Shared utilities and configurations.

## Contribution

Feel free to contribute to this project by opening a pull request or reporting issues.

## License

This project is open-source and available under the [MIT License](LICENSE).

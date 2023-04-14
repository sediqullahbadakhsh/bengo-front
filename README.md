# Bengo Search Engin

Bengo Search Engine is a web application built with React and Ruby on Rails. It uses PostgreSQL as the database and integrates several tools, including RTKQ and Recharts, to deliver a powerful search engine experience.

## Features

- Displays existing queries from the database
- Saves valid queries (queries ending with "?" or consisting of at least 3 words with more than 3 characters)
- Filters invalid data
- Updates query counters for existing users
- Stores IP addresses to prevent duplicate queries from existing users
- Saves new queries from new users
- Performs a quick analysis of how many questions are asked during a week by hour
- Displays the most frequently asked question
- Shows the most searched technology keywords in a week, month, or year

## Technologies

- Ruby on rails
- Rest API
- React
- RTK-Q
- Recharts
- Postgresql
- vite
- TailwindCSs

## API Integration

This app integrates with a RESTful API that provides search query data. The API documentation can be found at `http://localhost:3000/api-docs`.

## Installation

To get started with Bengo Search Engin, follow these steps:

1. Clone the repository from GitHub : `git clone https://github.com/sediqullahbadakhsh/bengo-front.git`
2. Install the dependencies: `npm install`
3. start the development server: `npm run dev`

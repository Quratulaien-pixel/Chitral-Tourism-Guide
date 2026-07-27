# Chitral Tourism Guide

A tourism guide website for Chitral, Pakistan — showcasing places to visit, hotels, festivals, and culture, with an AI-powered travel assistant to answer visitor questions.

**Live Demo:** https://chitral-tourism-guide-zj9c.vercel.app/

## Features

- **Explore** — Highlights of Chitral's top destinations, including Tirich Mir and Ayun Fort
- **Hotels** — Information on places to stay
- **Festivals** — Coverage of local festivals such as Chilam Joshi, Chaumos, and Shandur Polo
- **AI Guide** — Ask a Gemini-powered assistant about places to visit, hotels, festivals, travel tips, culture, itineraries, transport, and food
- **Contact** — Get in touch section

## Tech Stack

- HTML, CSS, and vanilla JavaScript for the frontend
- Node.js with Express for the backend server
- Google Gemini API (`@google/genai`) for the AI travel assistant

## Getting Started

### Prerequisites

- Node.js installed
- A Google Gemini API key

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```
GEMINI_API_KEY=your_api_key_here
```

### Run Locally

```bash
node server.js
```

The app will be available at `http://localhost:3000`.

## Deployment

This project is deployed on [Vercel](https://vercel.com).

## Project Structure

```
├── index.html      # Main site markup
├── style.css       # Site styling
├── script.js       # Frontend interactivity
├── server.js       # Express server + AI Guide API endpoint
├── images/          # Site images
└── package.json
```

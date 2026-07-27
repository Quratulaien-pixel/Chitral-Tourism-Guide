# Chitral Tourism Guide

Welcome to the Chitral Tourism Guide project! This React application serves as a comprehensive guide for exploring the beautiful region of Chitral, Pakistan. It includes information about places to visit, hotels, festivals, travel tips, and an AI travel guide.

## Project Structure

The project is organized as follows:

```
chitral-tourism-guide
├── public
│   └── images          # Contains all images used in the website
├── src
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Entry point of the React application
│   ├── index.css       # Global CSS styles
│   ├── components       # Contains all React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Places.jsx
│   │   ├── PlaceCard.jsx
│   │   ├── Hotels.jsx
│   │   ├── HotelCard.jsx
│   │   ├── Festivals.jsx
│   │   ├── FestivalCard.jsx
│   │   ├── Tips.jsx
│   │   ├── TipCard.jsx
│   │   ├── AiGuide.jsx
│   │   └── Contact.jsx
│   └── hooks
│       └── useAi.js    # Custom hook for AI guide functionality
├── index.html          # Main HTML template
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
├── .gitignore          # Files to ignore by Git
└── README.md           # Project documentation
```

## Getting Started

To get started with the Chitral Tourism Guide project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd chitral-tourism-guide
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Features

- **Explore Chitral**: Discover beautiful places with detailed information.
- **Hotels**: Find comfortable accommodations during your visit.
- **Festivals**: Learn about vibrant cultural events and festivals.
- **Travel Tips**: Get helpful tips for a smooth journey.
- **AI Travel Guide**: Ask questions and receive personalized travel advice.

## Deployment

This project is configured for deployment on Vercel with zero configuration. Simply connect your GitHub repository to Vercel, and it will automatically handle the deployment process.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
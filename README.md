# YouTube Clone

This is a YouTube clone built using React and Material UI that mimics the core functionalities of YouTube. It allows users to search for videos, view video details, explore channels, and play videos using the YouTube Data API. The design is fully responsive and modern, leveraging Material UI components to create an intuitive user interface.

## Features

- **Video Search:**
  - Search for videos using the YouTube Data API.
  - Displays a list of videos based on the search query.
  
- **Video Playback:**
  - Play videos directly in the app using `react-player`.
  - View video details such as title, description, and statistics (likes, views).

- **Channel Pages:**
  - Explore individual channels and view a list of their uploaded videos.
  - Displays channel details like subscriber count, banner image, and channel name.

- **Responsive Design:**
  - Fully responsive layout using Material UI, ensuring a smooth experience on both desktop and mobile devices.

- **Routing:**
  - React Router is used to enable smooth navigation between the homepage, video pages, channel pages, and search results.

## Tech Stack

- **Frontend:**
  - React (v18)
  - Material UI (MUI) for UI components and layout
  - Axios for making API requests
  - React Player for video playback
  - React Router DOM for navigation and routing

- **API Integration:**
  - YouTube Data API v3 to fetch video, channel, and search data.

## Routing
The app uses React Router for navigation, allowing users to move between pages effortlessly:

Home Page: Displays trending or popular videos fetched from the YouTube API.
Video Detail Page: Detailed view of the selected video with an embedded player and video-related info.
Channel Page: Displays channel details and recent videos from the selected channel.
Search Results: Shows videos based on the user's search query.
Custom Styling
The app is styled using Material UI, providing a clean and modern design.
Material UI icons are used for actions like play, pause, and more.


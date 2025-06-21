<<<<<<< HEAD
# interview--simulation-room
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> 79ec6e3 (completed)


# Interview Room

A real-time interview simulation platform built with React that allows interviewers and candidates to communicate in a dedicated virtual space.

## Tech Stack

- **Frontend Framework**: React with Vite
- **Routing**: React Router v7
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState, useEffect)
- **Storage**: Browser's LocalStorage for persistence
- **Development Tools**: ESLint for code quality

## How It Works

1. **Home Page**
   - Users can start a new meeting
   - Choose their role (Interviewer or Candidate)
   - Redirects to the interview room after role selection

2. **Interview Room**
   - Real-time chat functionality between interviewer and candidate
   - Message history persists across page refreshes using LocalStorage
   - Interviewers can upload and share files (PDF/TXT)
   - Messages are displayed with clear sender identification
   - Auto-scrolling chat window
   - Meeting can be ended by any participant

3. **Features**
   - Role-based access (different capabilities for interviewer/candidate)
   - File sharing support
   - Persistent chat history
   - Cross-tab synchronization
   - Responsive design
   - Custom scrollbar styling

## Future Improvements

1. **Real-time Communication**
   - Implement WebSocket/Socket.io for true real-time messaging
   - Add typing indicators
   - Read receipts for messages

2. **Authentication & Security**
   - User authentication system
   - Secure file transfers
   - Meeting access controls
   - End-to-end encryption for messages

3. **Enhanced Features**
   - Video/Audio calling capabilities
   - Screen sharing
   - Whiteboard functionality
   - Code editor for technical interviews
   - Meeting scheduling system
   - Interview recording options

4. **UI/UX Improvements**
   - Dark/Light theme toggle
   - More customizable interface
   - Better mobile responsiveness
   - Accessibility improvements
   - Interview templates/frameworks

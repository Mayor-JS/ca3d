// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App'; // Import the App component (no need for .tsx extension)
// import './index.css'; // Import global styles

// // Ensure the root element exists and is of type HTMLElement
// const rootElement = document.getElementById('root') as HTMLElement;

// if (rootElement) {
//   const root = createRoot(rootElement);
//   root.render(
//     <StrictMode>
//       <App />
//     </StrictMode>
//   );
// } else {
//   console.error('Root element not found');
// }  


// src/index.tsx

import React from 'react'; // Explicitly import React
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Import the App component (no need for .tsx extension)
import './index.css'; // Import global styles

// Ensure the root element exists and is of type HTMLElement
const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}

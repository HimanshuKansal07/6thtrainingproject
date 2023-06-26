import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './components/Layout';
import Institute from './components/institute';
import Socials from './components/Socials';
import Stats from './components/Stats';
import Blog from './components/Blog';
import About from './components/About';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './components/Contact';


const router = createBrowserRouter([
  { 
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Institute />,
      },
      {
        path: "/Socials",
        element: <Socials />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Stats",
        element: <Stats />,
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
      {
        path: "/About",
        element: <About />,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
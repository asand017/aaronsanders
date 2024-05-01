import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Root, { loader as rootLoader, action as rootAction } from "./routes/root";
import ErrorPage from "./routes/error-page";
import Contact from "./routes/contact";
import About from './routes/about';
import Projects from './routes/projects';
import { ABOUT_URL, BASE_URL, CONTACT_URL, PROJECTS_URL } from './utils/constants';

const router = createBrowserRouter([
  {
    path: BASE_URL,
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: CONTACT_URL,
        element: <Contact />
      },
      {
        path: ABOUT_URL,
        element: <About />
      },
      {
        path: PROJECTS_URL,
        element: <Projects />
      },
    ],
  }, {
      basename: "/" + BASE_URL,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

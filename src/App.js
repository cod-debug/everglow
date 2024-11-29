import './App.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import MainLayout from './layouts/MainLayout.js';


const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <Home /> },
    ]
  }
]);

function App() {
  return (
    <div className='mb-20'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

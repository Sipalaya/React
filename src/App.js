import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Error from './pages/Error';
import Main from './pages/Main';
//jsx
const myrouter = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);
function App() {
  return (
    <div className='App'>
      <RouterProvider router={myrouter} />
    </div>
  );
}

export default App;

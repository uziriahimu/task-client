import logo from './logo.svg';
import './App.css';
import Main from './Layout/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddTask from './Components/AddTask/AddTask';
import Home from './Components/Home/Home';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addtask',
        element: <AddTask></AddTask>
      },
      {
        path: '/mytask',
        element: <AddTask></AddTask>
      },
      {
        path: '/completed',
        element: <AddTask></AddTask>
      },
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}>

      </RouterProvider>
    </div>
  );
}

export default App;

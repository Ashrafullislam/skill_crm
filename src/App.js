import { RouterProvider } from 'react-router';
import './App.css';
import router from './Routes/Routes';

function App() {

  return (
    <div className="max-w-[1400px] mx-auto">

  <RouterProvider router={router}> </RouterProvider>

    </div>
  );
}

export default App;

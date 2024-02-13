import './App.css'
import { lazy } from 'react';
// const Home = lazy(()=> import ('./components/home/Home'));
const Azkar = lazy(()=> import ('./components/super-component/azkar/Azkar'));
const Ezaet = lazy(()=> import ('./components/super-component/ezaet-quran/Ezaet'));
const Payer = lazy(()=> import ('./components/super-component/payer/Payer'));
const QuranLive = lazy(()=> import ('./components/super-component/quran/QuranLive'));
const QuranRead = lazy(()=> import ('./components/super-component/quran-read/QuranRead'));
const TafserQuran = lazy(()=> import ('./components/super-component/tafser/TafserQuran'));

import {createHashRouter , RouterProvider} from 'react-router-dom'
import Root from './components/root/Root';
import Doaa from './components/super-component/doaa/Doaa';
// import TafserQuran from './components/super-component/tafser/TafserQuran';
// https://raw.githubusercontent.com/rn0x/Quran-Json/main/Quran.json
function App() {
const router = createHashRouter([
  {
    path : '/',
    element : <Root />,
    errorElement :  <h2>Error..........</h2>,
    children : [
      {index : true , element : <Payer />},
      {
        path : '/payer',
        element : <Payer />
      },
      {
        path : '/azkar',
        element : <Azkar />
      },
      {
        path : '/listening-quran',
        element : <QuranLive />
      },
      {
        path : '/ezaet-quran',
        element : <Ezaet />
      },
      {
        path : '/reading-quran',
        element : <QuranRead />
      },
      {
        path : '/tafser-quran',
        element : <TafserQuran />
      },
            {
        path : '/doaa',
        element : <Doaa />
      },

    ]
  }
]);

  return (
    <div dir='rtl' className='app'>
    <RouterProvider router={router} />    
      </div>
  )
}

export default App

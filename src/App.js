import { Route, Routes } from 'react-router-dom';
import AboutPage from './AboutPage';
import { SlideBar } from './components/SlideBar/SlideBar';
import HomePage from './HomePage';
import Detail from './Detail';


function App() {
  return (
    <>
      <SlideBar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<AboutPage />} />
        <Route path='/users/:nameuser' element={<Detail/> } />
      </Routes>

    </>
  );
}

export default App;

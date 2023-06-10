import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpDetail from './EmpDetail52023';
import EmpDetail62023 from './EmpDetail62023';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />}></Route>
          <Route path='/employee52023/:id' element={<EmpDetail />}></Route>
          <Route path='/employee62023/:id' element={<EmpDetail62023 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
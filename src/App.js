import { Fragment } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../src/pages/HomePage';


function App() {
  return (
   <Fragment>
 <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>
  
      </Routes>
    </BrowserRouter>

   </Fragment>
  );
}

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Create } from './Create';
import { Traverse } from './Traverse';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './Menu';

const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Menu/>
        <Routes>
          {/* <Route path="/" exact element={()=><Traverse/>} /> */}
          <Route path="show" element={<Traverse/>} />
          <Route path="new" element={<Create/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
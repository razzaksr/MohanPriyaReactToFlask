import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Create } from './Create';
import { Traverse } from './Traverse';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './Menu';
import { Edit } from './Edit';
import { Filter } from './Filter';
import { Login } from './Login';

const App=()=>{
  return(
    <>
      {
        (sessionStorage.getItem("person"))
        ?
        <>
          <BrowserRouter>
            <Menu/>
            <Routes>
              {/* <Route path="/" exact element={()=><Traverse/>} /> */}
              <Route path="show" element={<Traverse/>} />
              <Route path="new" element={<Create/>} />
              <Route path="modify/:reg" exact element={<Edit/>} />
              <Route path="filter" exact element={<Filter/>} />
            </Routes>
          </BrowserRouter>
        </>
        :
        <>
          <Login/>
        </>
      }
    </>
  )
}

export default App;
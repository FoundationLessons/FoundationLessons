import React from "react";
import MyLayout from "./Layouts/MyLayout/MyLayout";
import {Routes, Route} from "react-router-dom"
import CartoonsList from "./components/Cartoons/CartoonList";
import WarMovies from "./components/WarMovies/WarMovies";

const App = () => {
  return (
    <div className="App">
      <MyLayout>
        <Routes>
          <Route path="/cartoons" element={<CartoonsList/>}/>
          <Route path="/war-movies" element={<WarMovies/>}/>
        </Routes>
      </MyLayout>
    </div>
  );
};

export default App;

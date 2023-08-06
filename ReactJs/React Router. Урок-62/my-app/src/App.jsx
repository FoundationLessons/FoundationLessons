import React from "react";
import MyLayout from "./components/Layout/MyLayout";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./containers/AboutMe/AboutMe";
import MyHobbies from "./containers/MyHobbies/MyHobbies";

const App = () => {
  return (
    <div className="App">
      <MyLayout>
        <Routes>
          <Route path="/" element={<AboutMe />}/>
          <Route path="/hobbies" element={<MyHobbies />}/>
        </Routes>
      </MyLayout>
    </div>
  );
};

export default App;

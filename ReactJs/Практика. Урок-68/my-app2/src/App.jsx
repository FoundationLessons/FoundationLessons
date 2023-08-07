import React from "react";
import MyLayout from "./Layouts/MyLayout/MyLayout";
import {Routes, Route} from "react-router-dom"
import ScienceFiction from "./components/ScienceFiction/ScienceFiction";
import PopularMovie from "./components/PopularMovies/PopularMovie";
import TrendingMovies from "./components/TrandingMovies/TrendMovies";
import FantasyMovies from "./components/FantasyMovies/FantaysMovies";

const App = () => {
  return (
    <div className="App">
      <MyLayout>
        <Routes>
          <Route path="/popmovies" element={<PopularMovie/>}/>
          <Route path="/tranding-movies" element={<TrendingMovies/>}/>
          <Route path="/science-fiction" element={<ScienceFiction/>}/>
          <Route path="/fantasy-movies" element={<FantasyMovies/>}/>
        </Routes>
      </MyLayout>
    </div>
  );
};

export default App;

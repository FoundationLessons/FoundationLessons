import HomePage from "./containers/HomePage/components/containers/HomePage";
import Layout from "./components/Layout";
import Cartoon from "./containers/Cartoon/components/containers";
import Fantasy from "./containers/Fantasy/components/containers"; 
import { Routes, Route } from "react-router-dom";
import Science from "./containers/ScienceFiction/components/containers";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/cartoon" element={<Cartoon/>} />
          <Route path="/fantasy" element={<Fantasy/>} />
          <Route path="/science" element={<Science/>}/>
          <Route path="*" element={<h1 style={{color:'blue'}}>404 Forbidden Not Found Page</h1>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

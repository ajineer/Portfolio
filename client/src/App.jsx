import Project1 from "./components/Project1";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  const colors = ['bg-primary', 'bg-secondary', 'bg-accent1', 'bg-accent2', 'bg-accent3'];
  const lastName = ['P', 'i', 'e', 'r', 'c', 'e']

  return (
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/project_1" element={<Project1/>}/>
    </Routes>
  );
}

export default App;


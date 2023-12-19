import ProjectPage from "./components/ProjectPage";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import data from "./projectStore";
import { useEffect } from "react";
import React from "react";

function App() {
  const colors = ['bg-primary', 'bg-secondary', 'bg-accent1', 'bg-accent2', 'bg-accent3'];
  const lastName = ['P', 'i', 'e', 'r', 'c', 'e']  

  return (
    <Routes>
      <Route exact path="/" element={<Home />}/>
      {data.projects.map(((proj) => {
        return (
          <Route key={proj.id} path={`/project_${proj.id}`} element={<ProjectPage proj={proj}/>}/>
        )
      }))}
    </Routes>
  );
}

export default App;


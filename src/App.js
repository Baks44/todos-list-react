import { Routes, Route } from "react-router-dom";
import About from "./features/About/About";
import Tasks from "./features/tasks/Tasks";

export const App = () => (
  <Routes>
    <Route path="/" element={<Tasks />} />
    <Route path="/About" element={<About />} />
    <Route path="*" element={<Tasks />} />
  </Routes>
);

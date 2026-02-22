import { Routes, Route } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";

export const App = () => (
  <Routes>
    <Route path="/" element={<Tasks />} />
    <Route path="*" element={<Tasks />} />
  </Routes>
);

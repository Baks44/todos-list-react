import { Routes, Route } from "react-router-dom";
import About from "./features/About/About";
import Tasks from "./features/tasks/Tasks";
import Navigation from "./common/Navigation";
import TaskPage from "./features/tasks/TaskPage";

export const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Tasks />} />
      <Route path="/about" element={<About />} />
      <Route path="/tasks/:id" element={<TaskPage />} />
      <Route path="*" element={<Tasks />} />
    </Routes>
  </>
);

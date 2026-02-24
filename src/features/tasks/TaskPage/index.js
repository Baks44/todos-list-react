import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TaskPage = () => {
  const { id } = useParams();

  const task = useSelector((state) =>
    state.tasks.tasks.find((task) => task.id === Number(id)),
  );

  if (!task) {
    return <p>Zadanie nie istnieje.</p>;
  }

  return (
    <div>
      <Link to="/">← Powrót do listy</Link>

      <h2>{task.content}</h2>
      <p>Status: {task.done ? "Ukończone" : "Nieukończone"}</p>
    </div>
  );
};

export default TaskPage;

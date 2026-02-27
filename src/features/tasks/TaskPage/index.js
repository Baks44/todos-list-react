import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Container from "../../../common/Container";

const TaskPage = () => {
  const { id } = useParams();

  const task = useSelector((state) =>
    state.tasks.tasks.find((task) => task.id === Number(id)),
  );

  if (!task) {
    return (
      <Container>
        <Header title="Zadanie" />
        <Section title="Błąd" body={<p>Zadanie nie istnieje.</p>} />
      </Container>
    );
  }

  return (
    <Container>
      <Header title="Szczegóły zadania" />

      <Section
        title={task.content}
        body={
          <>
            <p>
              Status:{" "}
              <strong>{task.done ? "Ukończone" : "Nieukończone"}</strong>
            </p>

            <Link to="/">← Powrót do listy</Link>
          </>
        }
      />
    </Container>
  );
};

export default TaskPage;

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Container from "../../../common/Container";

import { BackLink } from "./styled";

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

            <BackLink to="/">← Powrót do listy</BackLink>
          </>
        }
      />
    </Container>
  );
};

export default TaskPage;

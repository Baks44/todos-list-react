import Form from "./Form";
import Buttons from "./Buttons";
import TasksList from "./TasksList";
import Search from "./Search";

import Header from "../../common/Header";
import Section from "../../common/Section";
import Container from "../../common/Container";

import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "./tasksSlice";

const Tasks = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Header title="Lista Zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={
          <button onClick={() => dispatch(fetchExampleTasks())}>
            Pobierz przykładowe zadania
          </button>
        }
      />

      <Section
        title="Lista zadań"
        body={
          <>
            <Search />
            <TasksList />
          </>
        }
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
};

export default Tasks;

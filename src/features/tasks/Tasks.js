import Form from "./Form";
import Buttons from "./Buttons";
import { Button, Loading } from "./Buttons/styled";
import TasksList from "./TasksList";
import Search from "./Search";

import Header from "../../common/Header";
import Section from "../../common/Section";
import Container from "../../common/Container";

import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "./tasksSlice";

const Tasks = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <Container>
      <Header title="Lista Zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={
          loading ? (
            <Loading>Ładowanie...</Loading>
          ) : (
            <Button
              onClick={() => dispatch(fetchExampleTasks())}
              disabled={loading}
            >
              {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
            </Button>
          )
        }
      />

      <Section title="Wyszukiwarka" body={<Search />} />

      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
};

export default Tasks;

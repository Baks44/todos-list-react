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

import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { setQuery } from "./Search/searchSlice";

const Tasks = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get("search") || "";
    dispatch(setQuery(search));
  }, [searchParams, dispatch]);

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

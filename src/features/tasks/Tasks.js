import Form from "./Form";
import Buttons from "./Buttons";
import TasksList from "./TasksList";
import Search from "./Search";

import Header from "../../common/Header";
import Section from "../../common/Section";
import Container from "../../common/Container";

const Tasks = () => (
  <Container>
    <Header title="Lista Zadań" />

    <Section title="Dodaj nowe zadanie" body={<Form />} />

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

export default Tasks;

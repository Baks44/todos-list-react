import Form from "./Form";
import Buttons from "./Buttons";
import TasksList from "./TasksList";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Container from "../../common/Container";
import useLocalStorage from "../../Hooks/useLocalStorage";

function Tasks() {
  const [hideDone, setHideDone] = useLocalStorage("hideDone", false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  return (
    <Container>
      <Header title="Lista Zadań" />

      <Section title="Dodaj nowe zadanie" body={<Form />} />

      <Section
        title="Lista zadań"
        body={<TasksList hideDone={hideDone} />}
        extraHeaderContent={
          <Buttons hideDone={hideDone} toggleHideDone={toggleHideDone} />
        }
      />
    </Container>
  );
}

export default Tasks;

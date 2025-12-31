import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";
import useLocalStorage from "./Hooks/useLocalStorage";
import useTasks from "./Hooks/useTasks";
import { PageTitle } from "./Header/styled";

function App() {
  const [hideDone, setHideDone] = useLocalStorage("hideDone", false);

  const {
    tasks,
    addNewTask,
    removeTask,
    toggleTaskDone,
    setAllDone,
  } = useTasks();

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
    <Container>
      <PageTitle>Lista Zadań</PageTitle>

      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default App;

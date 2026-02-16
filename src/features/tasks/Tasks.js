import Form from "./Form";
import Buttons from "./Buttons";
import TasksList from "./TasksList";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Container from "../../common/Container";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { useSelector } from "react-redux";

function Tasks() {
  const [hideDone, setHideDone] = useLocalStorage("hideDone", false);

  const { tasks, addNewTask, removeTask, toggleTaskDone, setAllDone } =
    useSelector((state) => state.tasks);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  return (
    <Container>
      <Header title="Lista Zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        body={
          <TasksList
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

export default Tasks;

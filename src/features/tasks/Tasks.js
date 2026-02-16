import Form from "./Form";
import Buttons from "./Buttons";
import TasksList from "./TasksList";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Container from "../../common/Container";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../tasksSlice";

function Tasks() {
  const dispatch = useDispatch();
  const [hideDone, setHideDone] = useLocalStorage("hideDone", false);
  const tasks = useSelector((state) => state.tasks);

  const addNewTask = (task) => dispatch(addTask(task));
  const removeTask = (id) => dispatch(removeTask(id));
  const toggleTaskDone = (id) => dispatch(toggleTaskDone(id));
  const setAllDone = () => dispatch(setAllDone());

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

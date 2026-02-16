import Form from "./Form";
import Buttons from "./Buttons";
import TasksList from "./TasksList";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Container from "../../common/Container";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, toggleTaskDone, setAllDone } from "./tasksSlice";

function Tasks() {
  const dispatch = useDispatch();
  const [hideDone, setHideDone] = useLocalStorage("hideDone", false);
  const tasks = useSelector((state) => state.tasks);

  const handleAddTask = (task) => dispatch(addTask(task));
  const handleRemoveTask = (id) => dispatch(removeTask(id));
  const handleToggleTaskDone = (id) => dispatch(toggleTaskDone(id));
  const handleSetAllDone = () => dispatch(setAllDone());

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  return (
    <Container>
      <Header title="Lista Zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={handleAddTask} />}
      />

      <Section
        title="Lista zadań"
        body={
          <TasksList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={handleRemoveTask}
            toggleTaskDone={handleToggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={handleSetAllDone}
          />
        }
      />
    </Container>
  );
}

export default Tasks;

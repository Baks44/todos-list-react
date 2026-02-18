import { List, Item, Button, Content } from "./styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTask, toggleTaskDone } from "../tasksSlice";

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks.items);
  const hideDone = useSelector((state) => state.tasks.hideDone);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : "\u00A0"}
          </Button>
          <Content done={task.done}>{task.content}</Content>

          <Button remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TasksList;

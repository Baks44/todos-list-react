import { List, Item, Button, Content } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeTask,
  toggleTaskDone,
  selectTasks,
  selectHideDone,
} from "../tasksSlice";

const TasksList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : "\u00A0"}
          </Button>
          <Link to={`/tasks/${task.id}`}>
            <Content done={task.done}>{task.content}</Content>
          </Link>

          <Button remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TasksList;

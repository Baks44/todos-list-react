import { List, Item, Button, Content } from "./styled";
import { useSelector } from "react-redux";

const TasksList = ({ hideDone, removeTask, toggleTaskDone }) => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button toggleDone onClick={() => toggleTaskDone(task.id)}>
            {task.done ? "✓" : "\u00A0"}
          </Button>
          <Content done={task.done}>{task.content}</Content>

          <Button remove onClick={() => removeTask(task.id)}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TasksList;

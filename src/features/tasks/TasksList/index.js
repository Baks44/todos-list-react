import { List, Item, Button, Content, StyledLink } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectQuery } from "../Search/searchSlice";
import {
  removeTask,
  toggleTaskDone,
  selectHideDone,
  selectFilteredTasks,
} from "../tasksSlice";

const TasksList = () => {
  const dispatch = useDispatch();

  const query = useSelector(selectQuery);
  const tasks = useSelector((state) => selectFilteredTasks(state, query));
  const hideDone = useSelector(selectHideDone);

  return (
    <>
      {tasks.length === 0 && query ? (
        <p>Brak zadań spełniających kryteria wyszukiwania</p>
      ) : (
        <List>
          {tasks.map((task) => (
            <Item key={task.id} hidden={task.done && hideDone}>
              <Button
                toggleDone
                onClick={() => dispatch(toggleTaskDone(task.id))}
              >
                {task.done ? "✓" : "\u00A0"}
              </Button>

              <StyledLink to={`/tasks/${task.id}`}>
                <Content done={task.done}>{task.content}</Content>
              </StyledLink>

              <Button remove onClick={() => dispatch(removeTask(task.id))}>
                🗑
              </Button>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

export default TasksList;

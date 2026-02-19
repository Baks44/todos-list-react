import { Wrapper, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  setAllDone,
  toggleHideDone,
  selectTasks,
  selectHideDone,
} from "../tasksSlice";

const Buttons = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);

  return (
    <Wrapper>
      {tasks.length > 0 && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
          </Button>

          <Button
            disabled={tasks.every(({ done }) => done)}
            onClick={() => dispatch(setAllDone())}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default Buttons;

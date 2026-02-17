import { Wrapper, Button } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { setAllDone } from "../tasksSlice";

const Buttons = ({ hideDone, toggleHideDone }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  return (
    <Wrapper>
      {tasks.length > 0 && (
        <>
          <Button onClick={toggleHideDone}>
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

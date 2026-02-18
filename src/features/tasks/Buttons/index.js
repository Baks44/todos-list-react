import { Wrapper, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { setAllDone, toggleHideDone } from "../tasksSlice";

const Buttons = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.items);
  const hideDone = useSelector((state) => state.tasks.hideDone);

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

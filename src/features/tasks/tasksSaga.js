import { put, takeLatest, delay, call } from "redux-saga/effects";
import { exampleTasks } from "./exampleTasks";
import { fetchExampleTasks, fetchExampleTasksSuccess } from "./tasksSlice";

function* fetchExampleTasksHandler() {
  yield delay(1000);

  yield call([localStorage, "setItem"], "tasks", JSON.stringify(exampleTasks));

  yield put(fetchExampleTasksSuccess(exampleTasks));
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
}

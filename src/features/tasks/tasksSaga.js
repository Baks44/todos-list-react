import { put, takeLatest, delay } from "redux-saga/effects";
import { exampleTasks } from "./exampleTasks";

import { fetchExampleTasks, fetchExampleTasksSuccess } from "./tasksSlice";

function* fetchExampleTasksHandler() {
  yield delay(1000);

  yield put(fetchExampleTasksSuccess(exampleTasks));
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
}

import { all } from "redux-saga/effects";
import {appSaga} from "../Modules/app";
import {homeSaga} from "../Modules/home"

const sagas = [
  appSaga(),
  homeSaga()
];

export default function*() {
  yield all(sagas);
}

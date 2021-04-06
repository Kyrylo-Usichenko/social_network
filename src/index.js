
import reportWebVitals from './reportWebVitals';
import './scss/index.scss'
import {rerenderEntireTree} from './render'
import state from "./redux/state";



rerenderEntireTree(state)


reportWebVitals();

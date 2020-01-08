import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import * as actions from './actions'

const store = createStore(reducer);
const { dispatch } = store;

//custom bindActionCreators
/*const bindActionCreator = (creator, dispatch) => (...args) => {
    dispatch(creator(...args))
};*/

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

document
    .getElementById('inc')
    .addEventListener('click', inc);

document
    .getElementById('dec')
    .addEventListener('click', dec);

document
    .getElementById('rnd')
    .addEventListener('click', () => {
        const random  = Math.floor(Math.random() * 10);
        rnd(random);
    });

const update = () => {
    document
        .getElementById('counter')
        .innerHTML = store.getState()
};

store.subscribe(update);
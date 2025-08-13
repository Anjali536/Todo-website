import {atom} from 'recoil';

const todoData = atom({
    key: "todoData",
    default: [],
});

export default todoData;
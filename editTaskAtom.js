import {atom} from 'recoil';

const editTaskAtom = atom({
    key: "editTask",
    default: null,
});

export default editTaskAtom;
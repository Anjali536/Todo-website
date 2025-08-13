import React from 'react'
import { RecoilState, useRecoilState } from 'recoil';
import addTaskAtom from '../../recoil/addTaskAtom';
import todoData from '../../recoil/todoData';
import editTaskAtom from '../../recoil/editTaskAtom';
import { useRef } from 'react';

const EditTask = () => {
    //Global variables
    const [addTaskOverlay, setAddTaskOverlay] = useRecoilState(addTaskAtom);
    const [todoApiData, setTodoApiData] = useRecoilState(todoData);
    const [SelectedEditTask, setSelectedEditTask] = useRecoilState(editTaskAtom);
    //local variables
    const titleRef = useRef(null);
    const descRef = useRef(null);

     const editTaskHandler = (e) => {
        e.preventDefault();
        const data = {
            id: SelectedEditTask?.id,
            title: titleRef?.current?.value,
            desc: descRef?.current?.value
        };

        fetch('http://127.0.0.1:8000/update_task/', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Response from server:", data);
            setSelectedEditTask(false);
            setTodoApiData(data?.todo_data);
        })
        .catch((error) => {
            console.error('Error', error);
        });
     };
  return (
        <div className="add-task-container">
        <div className="add-task-content">
            <h1>Edit Task</h1>
            <form onSubmit={ editTaskHandler } className="add-task-form">
                <input ref ={titleRef} type="text" placeholder="Title" defaultValue={SelectedEditTask?.title}/>
                <textarea ref={descRef} cols="30" rows="10" placeholder="description" defaultValue={SelectedEditTask?.desc}></textarea>
                <button>Add</button>
            </form>
        </div>
    </div>
  )
}

export default EditTask
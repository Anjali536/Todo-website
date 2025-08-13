import React, { useEffect } from "react";
import Header from "../components/home/Header";
import SearchBar from "../components/home/SearchBar";
import Filters from "../components/home/Filters";
import Todos from "../components/home/Todos";
import "./home.css";
import { AddTask } from "../components/home/AddTask";
import { useRecoilState } from "recoil";
import addTaskAtom from "../recoil/addTaskAtom";
import apiDataAtom from "../recoil/apiDataAtom";
import todoData from "../recoil/todoData";
import editTaskAtom from "../recoil/editTaskAtom";
import EditTask from "../components/home/EditTask";

const Home = () => {
  const [addTaskOverlay, setAddTaskOverlay] = useRecoilState(addTaskAtom);
  const [apiData, setApiData] = useRecoilState(apiDataAtom);
  const [todoApiData, setTodoApiData] = useRecoilState(todoData);
  const [SelectedEditTask, setSelectedEditTask] = useRecoilState(editTaskAtom);

  const homeData = {
    stats: [
      { label: "All", value: 4 },
      { label: "Completed", value: 6 },
      { label: "Inprogress", value: 2 },
      { label: "Archived", value: 10 },
    ],

    todo_Data: [
      {
        title: "Title 1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rem eveniet eos?",
        color: "#00ac69",
        status: "completed",
      },
      {
        title: "Title 2",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rem eveniet eos?",
        color: "#2146d8",
        status: "in progress",

      },
      {
        title: "Title 3",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rem eveniet eos?",
        color: "#381344",
        status: "archived",
      },
      {
        title: "Title 4",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rem eveniet eos?",
        color: "#fab411",
        status: "completed",
      },
    ]
  };

 useEffect(() => {
  fetch('http://127.0.0.1:8000/intial_call/', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setApiData(data);
            setTodoApiData(data?.todo_data || []); 
        })
        .catch((error) => {
            alert(error);
        });
 }, [])

  return (
    <div className="relative">
    {addTaskOverlay && (
      <div>
        <div className="add-overlay" onClick={() => { setAddTaskOverlay(null); }}></div>
        <AddTask />
      </div>
    )}

    {SelectedEditTask && (
      <div>
        <div className="add-overlay" onClick={() => { setSelectedEditTask(null); }}></div>
        <EditTask />
      </div>
    )}
      <div className="home-container">
        <Header />
        <SearchBar />
        <Filters apiData={homeData} />
        <Todos />
      </div>
    </div>
  );
};

export default Home;
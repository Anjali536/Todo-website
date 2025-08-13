import React, { useEffect , useState} from "react";
import { filterEndpoints } from "../../helper/filter";
import { useRecoilState } from "recoil";
import todoData from "../../recoil/todoData";
import activeFilter from "../../recoil/activeFilter";

const Filters = (props) => {
    //local variables
    const [activeFilterValue, setActiveFilterValue] = useRecoilState(activeFilter);
     //global variables
     const [todoApiData, setTodoApiData] = useRecoilState(todoData);

     useEffect (() => {
        console.log("todoApiData");
        console.log(todoApiData);
     }, [todoApiData]);
     
    return (
    <div >
        <div className="filter-container">
            {props?.apiData?.stats?.map((data, index) => {
            return (
                <div key={index} className="filter-btn-container" onClick={ () => setActiveFilterValue(data?.label)}>
                    <button 
                    onClick={() => {
                        fetch('http://127.0.0.1:8000/' + filterEndpoints[index]?.endpoint, 
                            {
                            method: 'GET',
                            headers: {
                                "Content-Type": "application/json",
                            },
                        })
                        .then((response) => response.json())
                        .then((data) => {
                            if (index === 0) {
                            }
                            setTodoApiData(data?.todo_data);
                        })
                        .catch((error) => {
                            alert(error);
                        });
                    }} 
                    className={` ${activeFilterValue === data?.label ? "active-filter" : ""}`}>
                        <h3>{data?.label}</h3>
                        <p className={` ${activeFilterValue === data?.label ? "active-filter-value" : ""}`}>{data?.value}</p>
                    </button>
                </div>
            )
        })}</div>
    </div>
    );
};

export default Filters;
import './App.css';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

function App() {
  const[input, setInput] = useState("");
  const[list, setList] = useState([])
  const[uid, setUid] = useState();
  const[update, setUpdate] = useState(false);

  const handleInput = (e)=> {
    setInput(e.target.value)
  }

  const handleTask = (e)=> {
    setList([...list,input])
    setInput("")
  }

  const handleUpdate = (e)=> {
    list.splice(uid, 1, input);
    setInput("")
    setUpdate(false)
  }

  const handleDelete = (i) =>{
  const filterList = list.filter((elm)=> elm !== list[i])
      console.log("filterList", filterList);
      setList(filterList)
  }

  const handleEdit = (i) =>{
  const filterList = list.filter((elm)=> elm === list[i])
    setInput(filterList[0])
    setUid(i)
    setUpdate(true)
  }

  return (
    <div className="App">
         <h2>My Todo List</h2> 
       <div className="container" >
         <div className="input-box">
            <input type="text" className="todo-input"
             value={input} onChange={(e)=>handleInput(e)} placeholder='Enter Task'/> 
             {update ?<button onClick={handleUpdate} className="todo-btn">Update Task</button>
             :<button onClick={handleTask} className="todo-btn">Add Task</button>
        }
        </div>
        <div className="list">
          <ul>
            {list.map((item, i)=> <li key={i} onClick={()=>handleDelete(i)}>{item}
              <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" alt="edit"
              onClick={()=>handleEdit(i)}/>
              <FontAwesomeIcon icon={faTrash} className="dlt-icon" alt="delete"/>
              </li>)}
          </ul>
         </div>
             

        </div> 
    </div>
  );
}

export default App;

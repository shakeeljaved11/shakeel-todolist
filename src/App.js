import logo from './logo.svg';
import './App.css';
import FirstPage from './component/FirstPage';
import { useState } from 'react';
import MapItem from './component/MapItem';

function App() {
  const [todolist,setTodoList]=useState([]);
  console.log("===>",todolist)

  const addList=(inputtext)=>{
    if(inputtext!=="")
 setTodoList([...todolist,inputtext])
  }
  const deleteItemLIst=(Key)=>{
    let newdata=[...todolist]
    newdata.splice(Key,1)
    setTodoList([...newdata])
  }
  return (
    <div className="App">
     <FirstPage addList={addList}/>
     {todolist.map((item,index)=>{
      return(
        <MapItem item={item} key={index} deleteitem={deleteItemLIst} index={index}/>
      )
     })}
    </div>
  );
}

export default App;

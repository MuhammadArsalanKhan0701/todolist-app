import { useState } from "react";
import styles from '../styles/todolist.module.css';

export default function TodoList() { 

  const [toDoList, setState] = useState({ 
                                newItem: "",
                                list: []
                              }); 

  function updateInput(key, value) {
    // update react state
    setState({ 
      ...toDoList,
      [key]: value});
  }

  function addItem() {
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: toDoList.newItem.slice()
    };

    // copy current list of items
    const list = [...toDoList.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    setState({
      newItem: "",
      list
    });
  }

  function deleteItem(id) {
    // copy current list of items
    const list = [...toDoList.list];

    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    setState({
      ...toDoList,
      list: updatedList });
  }

  return (
    <div>
      <h1 className={styles.appTitle}>ToDo LIST</h1>

      <div className={styles.container}>  
        <div className={styles.subDiv}>

        <label htmlFor="itemName">Add an Item...</label><br/>

        <input 
          id="itemName" 
          type="text"
          value={toDoList.newItem} 
          onChange={(e) => updateInput("newItem", e.target.value)} 
          placeholder="Type item here..."
          />
 
        <button className={styles.addBtn}
          type="button"
          onClick={() => addItem()}
          disabled={!toDoList.newItem.length}
          >
          +
        </button>

        <ul>
          {toDoList.list.map(item => {
            return (
              <li key={item.id}>
                {item.value}
                <button className={styles.crossBtn} onClick={() => deleteItem(item.id)}>
                  X
                </button>
              </li>
            )
          })}
        </ul>
      
        </div>
      </div>
    </div>
    ); 
}

 
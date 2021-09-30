import React, { FC,ReactElement ,useEffect, useReducer} from "react"
import TdInput from "./Input/index"
import TdList from "./List/index"
import { todoReducer } from "./reducer"
import { ACTION_TYPE, IState, ITodo } from "./typings"
const TodoList:FC=():ReactElement=>{
    // const [todoList, setTodoList] = useState<ITodo[]>([])
    const initialState:IState={
      todoList:[]

    }
   const [state, dispatch] = useReducer(todoReducer, initialState)
    const addTodo=(todo:ITodo)=>{
        //  setTodoList([...todoList,todo])
        dispatch({type:ACTION_TYPE.ADD_TODO,
         payload:todo
        })
    }
    useEffect(() => {
       console.log(state.todoList);
       
    }, [state.todoList])
    return (<div className="todo-list">
    
  <TdList></TdList>
  <TdInput addTodo={addTodo}
            todoList={state.todoList}
  ></TdInput>
</div>)}
export default TodoList

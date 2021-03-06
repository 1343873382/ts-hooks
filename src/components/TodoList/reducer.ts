import { IAction, IState,ACTION_TYPE, ITodo } from "./typings";

function todoReducer(state:IState,action:IAction):IState{
    const {type,payload}=action
    switch(type){
        case ACTION_TYPE.ADD_TODO:
       return {
           ...state,
           todoList:[...state.todoList,payload as ITodo]
       }
       default:
       return state
    }
}
export {todoReducer}
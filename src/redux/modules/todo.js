// Action Value
const ADD_TODO = "todos/ADD_TODO"
const DELETE_TODO = "todos/DELETE_TODO"
const DONE_TODO = "todos/DONE_TODO"

const defaultId = Date.now()
let idCount = 2 //defaultID를 사용하는 initialState의 id 값과 겹는 일이 발생하지 않도록 기본값을 2로 설정

// Action Creator
export const addTodo = (todo)=>{ //리스트 추가
    return{
        type: ADD_TODO,
        todo: {
            id: Date.now() + idCount++,
            title: todo.title,
            desc: todo.desc,
            isDone: todo.isDone,
        },
    }
}

export const deleteTodo = (todoId)=>{ //리스트 삭제
    return{
        type: DELETE_TODO,
        todoId: todoId
    }
}
export const doneTodo = (todoId)=>{ //리스트 완료
    return{
        type: DONE_TODO,
        todoId: todoId
    }
}


// Initial State
const initialState = {
    todos : [
        {id:defaultId, title:'리액트 리덕스', desc:'리액트 리덕스 공부하기!',isDone:false},
        {id:defaultId + 1, title:'리액트', desc:'리액트 공부하기!',isDone:true}
    ]
    };

  // Reducer
const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return{
                todos: [...state.todos, action.todo]
            }
        case DELETE_TODO:
            return{
                todos: state.todos.filter((todo) => todo.id !== action.todoId)
            }
        case DONE_TODO:
            return{
                todos: state.todos.map((todo)=>
                    todo.id === action.todoId
                    ? {...todo, isDone: !todo.isDone}
                    : todo
                )
            }
        default:
        return state;
    }
};

// export default reducer
export default todos;
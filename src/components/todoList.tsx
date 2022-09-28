import { ReactElement, useState } from "react";
import Todo from "./todo";
import TodoForm from "./todoForm";
import { TodoType } from "../types";

function TodoList(): ReactElement<Element> {
    const [todos, setTodos] = useState<TodoType[]>([]);

    const addTodo = (newValue: TodoType) => {
        setTodos([newValue, ...todos])
    }

    const updateTodo = (id: number, newValue: TodoType) => {
        setTodos(prev => prev.map((item: TodoType) => (item.id === id ? newValue : item)))
    }

    const removeTodo = (id: number) => {
        setTodos(todos.filter((item: TodoType) => item.id !== id))
    }

    const completeTodo = (id: number) => {
        const updateTodo: TodoType[] = todos.map((item: TodoType) => {
            if (item.id === id) {
                item.isComplete = !item.isComplete;
            }
            return item;
        });
        setTodos(updateTodo);
    }

    return(
        <>
          <h1>What's the plan for today?</h1>
          <TodoForm onSubmit={addTodo} />
          <Todo
             todos={todos}
             completeTodo={completeTodo}
             removeTodo={removeTodo}
             updateTodo={updateTodo}
           />
        </>
    )

}

export default TodoList;
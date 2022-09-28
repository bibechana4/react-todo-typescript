import { ReactElement, useState, useEffect, useRef } from "react";
import { TodoFormEventType, TodoFormPropsType } from '../types';

function TodoForm(props: TodoFormPropsType): ReactElement<Element> {
    const [input, setInput] = useState<string>(props.edit ? props.edit.value : '');

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        inputRef.current?.focus();
    });

    const handleSubmit = (event: TodoFormEventType) => {
        event.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            isComplete: false,
        })
        setInput('');
    }

    return (
        <form>
            {
                props.edit ? (
                    <>
                        <input
                            placeholder="Update your todo"
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            name='text'
                            className="todo-input edit"
                            ref={inputRef}
                        />
                        <button className="todo-button" onClick={handleSubmit}>Add Todo</button>
                    </>
                ) : (
                    <>
                        <input
                            placeholder="Add a todo"
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            name='text'
                            className="todo-input"
                            ref={inputRef}
                        />
                        <button className="todo-button edit" onClick={handleSubmit}>Update Todo</button></>
                )
            }
            <input
                placeholder="Add a todo"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                name='text'
                className="todo-input"
            />
            <button className="todo-button" onClick={handleSubmit}>Add Todo</button>
        </form>


    )
}

export default TodoForm;
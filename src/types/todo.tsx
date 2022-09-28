export type TodoType = {
    id: number;
    text: string;
    isComplete?: boolean;
}

 export type TodoFormPropsType = {

    edit?: { value: string; };

    onSubmit: ({ id, text, isComplete }: { id: number; text: string; isComplete: boolean; }) => void;

}



export type TodoFormEventType = {

    preventDefault: () => void;

}

export type TodoFormType = {
    todos: TodoType[];
    completeTodo: Function;
    removeTodo: Function;
    updateTodo: Function;
}
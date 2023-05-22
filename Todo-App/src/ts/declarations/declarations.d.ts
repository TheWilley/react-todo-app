declare interface taskHandlerInterface {
    tasks: string[],
    setTask: React.Dispatch<React.SetStateAction<never[]>>;
}

declare interface taskModel {
    id: number,
    title: string,
    completed: boolean
    editing: boolean
}

declare interface ControllerInterface {
    list: taskModel[];
    handleCheckClick: (event: React.MouseEvent, task_id: number) => void;
    handleEditClick: (event: React.MouseEvent, task_id: number) => void;
    handleDestroyClick: (event: React.MouseEvent, task_id: number) => void;
    handleClearCompleted: () => void;
    handleEditKeyPress: (event: React.KeyboardEvent, task_id: number) => void;
}
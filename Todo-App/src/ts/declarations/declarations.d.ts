declare interface taskHandlerInterface {
    tasks: string[],
    setTask: React.Dispatch<React.SetStateAction<never[]>>;
}

declare interface taskModel {
    id: number,
    title: string,
    completed: boolean
    editing: boolean
    show: boolean
}

declare interface ControllerInterface {
    list: taskModel[];
    handleCheckClick: (event: React.MouseEvent, task_id: number) => void;
    handleEditClick: (event: React.MouseEvent, task_id: number) => void;
    handleDestroyClick: (event: React.MouseEvent, task_id: number) => void;
    handleClearCompleted: () => void;
    handleEditKeyPress: (event: React.KeyboardEvent, task_id: number) => void;
    handleRouter: (event: React.MouseEvent, path: view_states) => void
    handleNewKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
    handleToggleAll: (event: React.MouseEvent) => void
}

declare type view_states = 'all' | 'active' | 'completed' | ''  
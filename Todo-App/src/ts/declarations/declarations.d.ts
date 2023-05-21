declare interface taskHandlerInterface {
    tasks: string[],
    setTask: React.Dispatch<React.SetStateAction<never[]>>;
}

declare interface taskModel {
    title: string,
    completed: boolean
}
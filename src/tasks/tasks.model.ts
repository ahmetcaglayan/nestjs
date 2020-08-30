export interface Task {
    id: string;
    title: string;
    status: TaskStatus;
    description: string;
}

export enum TaskStatus {
    OPEN = 'OPEN',
    DONE = 'DONE',
    IN_PROGRESS = 'IN_PROGRESS',
}
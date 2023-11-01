export interface IItem {
    id: number;
    title: string;
    status: boolean;
    priority: boolean;
    deadline: Date;
}

export const ITEMS: IItem[] = [
    {
        id: 1,
        title: "Homework",
        status: false,
        priority: true,
        deadline: new Date()
    },
    {
        id: 2,
        title: "Course Work",
        status: true,
        priority: false,
        deadline: new Date()
    }
]
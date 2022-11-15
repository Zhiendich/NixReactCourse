import { v4}  from 'uuid'
export type ToDoItemProps = {
    id : string,
    title : string,
    description : string,
    status : string,
    createDate : string,
}

export const ToDoItemList : ToDoItemProps[] = [
    {
        id : v4(),
        title : 'Programing',
        description : 'Первый таск',
        status : 'Open',
        createDate : '11/14/2022, 5:55:13 PM'
     },
     {
        id : v4(),
        title : 'Programing',
        description : 'Второй таск',
        status : 'In Progress',
        createDate : '11/14/2022, 5:49:13 PM'
     },
     {
        id : v4(),
        title : 'Programing',
        description : 'Третий таск',
        status : 'Done',
        createDate : '11/14/2022, 5:53:13 PM'
     }
]


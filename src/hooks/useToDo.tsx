import { useCallback, useState } from "react"
import { IToDo } from "src/providers/interfaces";
import { ToDoServices } from "src/services"

export const useToDo = () => {
    const [tasks, setTasks] = useState<IToDo[]>([]);
    const getAll = useCallback(async () => {
        const { status, data } = await ToDoServices.getALL();
        if (status != 200) throw new Error();
        setTasks(data);
    }, [])
    return {
        getAll
    }
}
import { Api } from "src/providers"
import { IToDo } from "src/providers/interfaces"

const getALL = ( ) => Api.get<IToDo[]>('/v1/todos')

export const ToDoServices = {
    getALL,
}
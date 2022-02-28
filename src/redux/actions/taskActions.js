import {TASK_ADD, TASK_REMOVE,TASK_SEARCH } from "../constants/taskConstant"

export const addTask = (task) => {
    return {
        type: TASK_ADD, payload: task
    }
}

export const removeTask = (id) => {
    return {
        type: TASK_REMOVE, payload: id
    }
}

export const searchTask = (value) => {
    return {
        type: TASK_SEARCH, payload: value
    }
}
import { createSlice } from "@reduxjs/toolkit"

export const questionReducer = createSlice({
    name: 'questions',
    initialState: {
        queue: [],
        answers: [],
        trace : 0
    },
    reducers: {
        startExamAction: (state, action) => {
            return {
                ...state,
                queue: action.payload
            }
        },

        moveNextAction: (state) => {
            return {
                ...state,
                trace: state.trace + 1
            }
        },

        movePrevAction: (state) => {
            return {
                ...state,
                trace: state.trace - 1
            }
        },
        resetAllAction : () => {
            return {
                queue: [],
                trace: 0,
                answers: []
            }
        }
    }
})

export const {moveNextAction, startExamAction, movePrevAction, resetAllAction } = questionReducer.actions

export default questionReducer.reducer
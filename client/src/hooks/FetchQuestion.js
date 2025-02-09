import { useEffect } from "react"
import data from "../database/data"
import { useDispatch } from 'react-redux';
import * as Action from '../redux/question_reducer'
import { useState } from "react"

export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError : null})

    useEffect(() => {
        setGetData(prev => ({...prev, isLoading : true}));

        (async() =>{
            try{
                let question = await data;

                if(question.length > 0){
                    setGetData(prev => ({...prev, isLoading : false}));
                    setGetData(prev => ({...prev, apiData : question}));
                    
                    dispatch(Action.startExamAction(question))
                     }
                     else{
                        throw new Error('No question found');
                     }
            }catch(error){
                setGetData(prev => ({...prev, isLoading : true}));
                setGetData(prev => ({...prev, serverError : error}));
            }
        })()
    },[dispatch]);

    return [getData, setGetData]
}

// moveAction dispatch function
export const moveNextQuestion = () => async(dispatch) => {
    try{
        dispatch(Action.moveNextAction())
}catch(error){
    console.log(error)
    }
}

// PrevAction dispatch function
export const movePrevQuestion= () => async(dispatch) => {
    try{
        dispatch(Action.movePrevAction())
}catch(error){
    console.log(error)
    }
}


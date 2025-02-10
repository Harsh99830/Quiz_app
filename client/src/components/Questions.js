import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useFetchQuestion } from '../hooks/FetchQuestion'
import { updateResult } from '../hooks/setResult'

function Questions( { onChecked }) {

    const [checked, setChecked] = useState(undefined)
    const { trace } = useSelector(state => state.questions)
    const result = useSelector(state => state.result.result)
    const [{ isLoading, apiData, serverError}] =  useFetchQuestion()
    // useSelector(state => console.log(state))
    const questions = useSelector(state => state.questions?.queue?.[state.questions.trace]);
    const dispatch = useDispatch()
    useEffect(() => {
        if (questions) {
        // console.log(questions);
        }
    }, [questions]);
    

    useEffect(() => {
        // console.log({ trace, checked })
        dispatch(updateResult({ trace, checked }))
    }, [checked, dispatch, trace]) 

    function onSelect(i) {
        // console.log(i)
        onChecked(i)
        setChecked(i)

    }

    if(isLoading) {
        return <h2 className='text-light'>Loading...</h2>
    }

    if(serverError) {
      return <h2 className='text-light'>{serverError || "Unknown Error"}</h2>
  } 
  return (
    <div className='questions'>
        <h2 className='text-light'>{questions?.question}</h2>

        
        <ul key={questions?.id}>
           {
            questions?.options.map((q, i) => {
                return(
                <li key={i}>
                <input
                 type='radio' 
                 value={checked}
                 name='options'
                  id={`q${i}-option`}
                  onChange= {() => onSelect(i)}
                  />

                  <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                  <div className={`check ${result[trace] === i ? 'checked' : ''} `}></div>
            </li>
                )
            })
           }
        </ul>
    </div>
  )
}

export default Questions
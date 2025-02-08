import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { useFetchQuestion } from '../hooks/FetchQuestion'

function Questions() {

    const [checked, setChecked] = useState(undefined)
   const [{ isLoading, apiData, serverError}] =  useFetchQuestion()

    const questions = useSelector(state => state.questions?.queue?.[state.questions.trace]);

    useEffect(() => {
        if (questions) {
            console.log(questions);
        }
    }, [questions]);
    

    useEffect(() => {
    // console.log(apiData)
    })

    function onSelect() {
        // console.log('radio button change')
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
                  onChange={onSelect}
                  />

                  <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                  <div className='check checked'></div>
            </li>
                )
            })
           }
        </ul>
    </div>
  )
}

export default Questions
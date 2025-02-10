import React, { useEffect } from 'react'
import Question from './Questions'
import { useState } from 'react'

import {useSelector, useDispatch} from 'react-redux'
import { moveNextQuestion, movePrevQuestion } from '../hooks/FetchQuestion'
import { PushAnswer } from '../hooks/setResult'
import { Navigate } from 'react-router-dom'
function Quiz() {
  const [check, setChecked] = useState(undefined)
  const result  = useSelector(state => state.result.result)
  const {queue, trace}  = useSelector(state => state.questions)
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(result)
  // })

  function onNext() {
    console.log('next')
    if(trace < queue.length){
      dispatch(moveNextQuestion())

      if(result.length <= trace){
        dispatch(PushAnswer(check))
      }
    }

    setChecked(undefined)
  }

  function onPrev() {
    console.log('prev')
    if(trace > 0){
    dispatch(movePrevQuestion())
    }
  }

  function onChecked(check) {
    console.log(check)
    setChecked(check)
  }

 // finish exam after the last question
  if(result.length && result.length >= queue.length) {
    return (
      <Navigate to='/result' replace={true}/>
    )
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>
    <Question onChecked={onChecked} />
      <div className='grid'>
        { trace > 0 ? <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>}
        <button className='btn next' onClick={onNext}>Next</button>
      </div>
    </div>
  )
}

export default Quiz

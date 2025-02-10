import React, { useEffect } from 'react'
import '../styles/Result.css'
import {Link} from 'react-router-dom'
import ResultTable from './ResultTable'
import { useDispatch, useSelector } from 'react-redux'
import { resetAllAction } from '../redux/question_reducer'
import { resetResultAction } from '../redux/result_reducer'
import { attempts_Number, earnPoints_Number, flagResult } from '../helper/helper'
function Result() {

  const dispatch = useDispatch()
  const {questions :{queue, answers}, result: {result, userId} } = useSelector(state => state)

    useEffect(() => {
      console.log(flag)
    })

    const totalPoints = queue.length*10;
    const attempts = attempts_Number(result);
    const earnPoints = earnPoints_Number(result, answers, 10);
    const flag = flagResult(totalPoints,earnPoints)
  function onRestart() {
    dispatch(resetAllAction())
    dispatch(resetResultAction())
  }
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz application</h1>

      <div className='result flex-center'>
        <div className='flex'>
          <span className='bold'>Username</span>
          <span>STED</span>
        </div>

        <div className='flex'>
          <span className='bold'>Total quiz points</span>
          <span className='bold'>{totalPoints || 0}</span>
        </div>

        <div className='flex'>
          <span className='bold'>Total Questions</span>
          <span className='bold'>{queue.length || 0}</span>
        </div>

          <div className='flex'>
          <span className='bold'>Total Attempts</span>
          <span className='bold'>{attempts || 0}</span>
        </div>

          <div className='flex'>
          <span className='bold'>Total Earn Points</span>
          <span className='bold'>{earnPoints || 0}</span>
        </div>

        <div className='flex'>
          <span className='bold'>quiz Result</span>
          <span style={{color:`${flag ? "#2aff95" : "#ff2a66"}`}} className='bold'>{flag ? "Passed" : "Failed"}</span>
        </div>
      </div>

      <div className='start'>
      <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
      </div>

      <div className='container'>
        <ResultTable />
      </div>
    </div>
  )
}

export default Result

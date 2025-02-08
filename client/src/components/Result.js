import React from 'react'
import '../styles/Result.css'
import {Link} from 'react-router-dom'
import ResultTable from './ResultTable'
function Result() {

  function onRestart() {
    console.log('Restart')
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
          <span>50</span>
        </div>

        <div className='flex'>
          <span className='bold'>Total Questions</span>
          <span>05</span>
        </div>

          <div className='flex'>
          <span className='bold'>Total Attempts</span>
          <span>03</span>
        </div>

          <div className='flex'>
          <span className='bold'>Total Earn Points</span>
          <span>30</span>
        </div>

        <div className='flex'>
          <span className='bold'>quiz Result</span>
          <span>Passed</span>
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

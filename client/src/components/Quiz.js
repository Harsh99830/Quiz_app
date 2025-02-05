import React from 'react'
import Question from './Questions'

function Quiz() {

  function onNext() {
    console.log('next')
  }

  function onPrev() {
    console.log('prev')
  }
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>
    <Question/>
      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>prev</button>
        <button className='btn next' onClick={onNext}>Next</button>
      </div>
    </div>
  )
}

export default Quiz

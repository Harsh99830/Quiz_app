import React, { useEffect, useState } from 'react'
import data from '../database/data'

function Questions() {

    const [checked, setChecked] = useState(undefined)

    const question = data[0]

    useEffect(() => {
        console.log(question)
    }, [])

    function onSelect() {
        console.log('radio button change')
    }
  return (
    <div className='questions'>
        <h2 className='text-light'>Simple questions</h2>

        
        <ul>
            <li>
                <input
                 type='radio' 
                 value={checked}
                 name='options'
                  id='q1-option' 
                  onChange={onSelect()}
                  />

                  <label className='text-primary' htmlFor='q1-option'>option</label>
                  <div className='check checked'></div>
            </li>
        </ul>
    </div>
  )
}

export default Questions
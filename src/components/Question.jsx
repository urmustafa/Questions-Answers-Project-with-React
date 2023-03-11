
import React, { useState } from 'react'
import { arrowdown, arrowup } from '../helper/icons'
import Card from './Card'

const Question = ({id,question,answer}) => {

  const [show, setShow] = useState(false)

  const btnClick=()=>{
    return(setShow(!show))
  }

  return (
    <div className='card-group'>


     {/* ************* 1. yöntem **************** */}

       {/* (<div className='card'>
            <div className='ques-answer'>
              <h5>
                {id}.{question}
              </h5>
              <button onClick={()=>btnClick()}>
                {show?arrowup:arrowdown}
              </button>
            </div>
            {show&&<p>{answer}</p>}
          </div>) */}


          {/* ************* 2. yöntem **************** */}
      {
        // show ? (
        // <div className='card'>
        //   <div className='ques-answer'>
        //     <h5>
        //       {id}.{question}
        //     </h5>
        //     <button onClick={()=>btnClick()}>
        //       {arrowup}
        //     </button>
        //   </div>
        //   <p>{answer}</p>
        // </div>)
        //   : (
        //   <div className='card'>
        //     <div className='ques'>
        //       <h5>
        //         {id}.{question}
        //       </h5>
        //       <button onClick={()=>btnClick()}>
        //         {arrowdown}
        //       </button>
        //     </div>
        // </div>)

      //  ************* 3. yöntem **************** 
         

        show ? <Card 
        id={id} 
        question={question} 
        answer={answer}
        icon={arrowup} 
        btnClick={btnClick}  />
        :
        <Card 
        id={id} 
        question={question} 
        icon={arrowdown}  
        btnClick={btnClick} />
      }
    </div>
  )
}

export default Question
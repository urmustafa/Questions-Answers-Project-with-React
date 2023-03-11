
const Card=({id,question,answer,icon,btnClick})=>{
  

  return(
    <div className='card'>
            <div className='ques-answer'>
              <h5>
                {id}.{question}
              </h5>
              <button onClick={()=>btnClick()}>
                {icon}
              </button>
            </div>
            {answer&&<p>{answer}</p>}
          </div>
  )
}
export default Card
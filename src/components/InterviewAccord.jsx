import Card from './Card';
import Question from './Question'
const InterviewAccord=(props)=>{
  const {data}=props;
  console.log(data);
  return(
    <div className="row">
      {
        data.map((item)=>{
          return(
            <>
             <Question key={item.id} {...item}></Question>
             {/* <Card key={item.id} item={item}></Card> */}
            </>    
            )
        })
      }
    </div>
  )
}
export default InterviewAccord
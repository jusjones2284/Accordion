
import SingleQuestion from './SingleQuestion'

const Questions = ({ questions }) => {

    

  return (
    <section>
        {questions.map((question)=>{
           return <SingleQuestion key={question.id} {...question}/>
        })}
        <SingleQuestion />
    </section>
  )
}

export default Questions
import { FormEvent, useState } from 'react'
import { Header } from '../../components/Header/Header'
import { Separator } from '../../components/Separator/Separator'
import { Tweet } from '../../components/Tweet/Tweet'
import './status.css'

export const Status = () => {

  const [newAnswer, setNewAnswer] = useState('')

  const [answers, setAnswer] = useState([
    'Agree!',
    'Makes sense!',
    'Congrats!'
  ])

  function createNewAnswer(e: FormEvent)  {
    e.preventDefault()
    setAnswer([newAnswer, ...answers])
    setNewAnswer('')
  }

  return (
    <main className='status'>
    <Header title="Tweet"/>

    <Tweet content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur vel tortor ac sodales. Donec luctus est eu augue egestas, nec tempor ex fringilla. Ut hendrerit tortor pulvinar ipsum lobortis dignissim. Vestibulum eget sem et ipsum eleifend dignissim sed at turpis. Morbi erat nunc, vehicula pharetra lobortis ac, auctor eget turpis. Vivamus consequat vitae orci in tempor. Aliquam erat volutpat. Aliquam nisi leo, condimentum sit amet aliquet eget, tempor at eros. Maecenas vehicula tortor eu est hendrerit, non blandit justo vestibulum. Duis nunc metus, volutpat eu gravida ut, ultricies quis metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' />

    <Separator/>
    
    <form onSubmit={createNewAnswer} className='answer-tweet-form'>
      <label htmlFor="tweet">
        <img src="http://github.com/andressavianab.png" alt="Andressa Batista" />
        <textarea 
        id="tweet"  
        placeholder="Tweet your answer"
        value={newAnswer}
        onChange={(e) => {
          setNewAnswer(e.target.value)
        }}
        />
      </label>
      <button type='submit'>Answer</button>
    </form>


    {answers.map(answer => {
      return <Tweet key={answer} content={answer} />
    })}
    
  </main>
  )
}
import { FormEvent, useState } from "react";
import { Header } from "../../components/Header/Header"
import { Separator } from "../../components/Separator/Separator"
import { Tweet } from "../../components/Tweet/Tweet"

import './timeline.css';

export const Timeline = () => {

  const [newTweet, setNewTweet] = useState('')

  const [tweets, setTweets] = useState([
    'A tweet!',
    'Another tweet =)',
    'It works!'
  ])

  function createNewTweet(e: FormEvent)  {
    e.preventDefault()
    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  return(
    <main className='timeline'>
    <Header title="Home"/>

    <form onSubmit={createNewTweet} className='new-tweet-form'>
      <label htmlFor="tweet">
        <img src="http://github.com/andressavianab.png" alt="Andressa Batista" />
        <textarea 
        id="tweet"  
        placeholder="What's happening?"
        value={newTweet}
        onChange={(e) => {
          setNewTweet(e.target.value)
        }}
        />
      </label>
      <button type='submit'>Tweet</button>
    </form>

    <Separator/>

    {tweets.map(tweet => {
      return <Tweet key={tweet} content={tweet} />
    })}
    
  </main>
  )
}
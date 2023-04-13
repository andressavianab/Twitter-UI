import { Header } from "../../components/Header/Header"
import { Separator } from "../../components/Separator/Separator"
import { Tweet } from "../../components/Tweet/Tweet"

const tweets = [
  'A tweet!',
  'Another tweet =)',
  'It works!'
]

import './timeline.css';

export const Timeline = () => {
  return(
    <main className='timeline'>
    <Header title="Home"/>

    <form className='new-tweet-form'>
      <label htmlFor="tweet">
        <img src="http://github.com/andressavianab.png" alt="Andressa Batista" />
        <textarea id="tweet"  placeholder="What's happening?"/>
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
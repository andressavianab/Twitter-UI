import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import { Link } from 'react-router-dom'

import './tweet.css'

interface TweetProps {
  content: string
}

export const Tweet = (props: TweetProps) => {
  return (
    <Link to='/status' className="tweet">
      <img src="http://github.com/andressavianab.png" alt="Andressa Batista" />
      <div className='tweet-content'>
        <div className='tweet-content-header'>
          <strong>Andressa Batista</strong>
          <span>@Andressavianab</span>
        </div>
        <p>
          {props.content}
        </p>
        <div className="tweet-content-footer">
          <button type='button'>
            <ChatCircle/>
            20
          </button>
          <button type='button'>
            <ArrowsClockwise />
            20
          </button>
          <button type='button'>
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  )
}
import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import './tweet.css'

export const Tweet = () => {
  return (
    <a href='#' className="tweet">
      <img src="http://github.com/andressavianab.png" alt="Andressa Batista" />
      <div className='tweet-content'>
        <div className='tweet-content-header'>
          <strong>Andressa Batista</strong>
          <span>@Andressavianab</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Unde laborum animi placeat modi quo explicabo, cum numquam dolorum rerum 
          pariatur eligendi expedita ex autem eius atque quidem dolor mollitia est?
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
    </a>
  )
}
import twitterLogo from '/src/assets/logo-twitter.svg'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react'

import './sidebar.css'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <aside className='sidebar'>
    <img className='logo' src={twitterLogo} alt="Logo" />

    <nav className='main-navigation'>
      <NavLink to="/">
        <House weight='fill'/>
       <span>Home</span> 
      </NavLink>
      <a href="#">
       <Hash />
       <span>Explore</span> 
      </a>
      <a href="#">
        <Bell />
        <span>Notifications</span>
      </a>
      <a href="#">
        <Envelope />
       <span>Messages</span>
      </a>
      <a href="#">
        <BookmarkSimple/>
        <span>Bookmarks</span>
      </a>
      <a href="#">
        <FileText/>
        <span>Lists</span> 
      </a>
      <a href="#">
        <User/>
        <span>
        Profile
        </span>
      </a>
      <a href="#">
        <DotsThreeCircle/>
       <span>More</span> 
      </a>
    </nav>

    <button className='new-tweet' type='button'>Tweet</button>
  </aside>
  )
}
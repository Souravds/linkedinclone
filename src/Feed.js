import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import { CalendarViewDay, EventNote, Subscriptions } from '@material-ui/icons';
import Post from './Post';
import { db } from './Firebase';

function Feed() {
  const [posts, setposts] = useState([]) 

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setposts(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }, [])

  const sendPost = (e) => {
    db.collection('posts').add({
      name: "Sourav das",
      description: "Programmer",
      message: "I am happy"
    })
  }
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color={"#70B5F9"}/>
          <InputOption Icon={Subscriptions} title="Video" color={"#e7a33e"}/>
          <InputOption Icon={EventNote} title="Event" color={"#c0cbcd"}/>
          <InputOption Icon={CalendarViewDay} title="Write" color={"#7fc15e"}/>
        </div>
      </div>

      {/* Posts */}
      {posts.map((post) => (
            <Post name={post.name} description={post.description} message={post.message} photoURL={post.photoURL}/>
        ))}
    </div>
  )
}

export default Feed

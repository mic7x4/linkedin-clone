import React, { useEffect, useState } from 'react'
import './Feeds.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import PhotoIcon from '@material-ui/icons/Photo';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import {db} from '../firebase'
import firebase from 'firebase'

function Feeds() {

    const [input,setInput] = useState('');
    const [posts, setPosts] =  useState([]);

    useEffect(()=>{
        db.collection('posts')
        .orderBy('timeStamp','desc')
        .onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc=>(
                {
                    id:doc.id,
                    data:doc.data()
                }
            )))
        ))
    },[])

    const sendPost = (e)=>{
        e.preventDefault();
        db.collection("posts").add({
            name:"The sauce god",
            description:"here is the test one",
            message: input,
            photoUrl:'',
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput('')
        
    }
    return (
        <div className="feeds">
            <div className="feeds__inputContainer">
                <div className="feeds__input">
                    <CreateIcon/>
                    <form action="">
                        <input value={input} onChange={e=> setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feeds__inputOption">
                    <InputOption Icon={PhotoIcon} color="#70B5F9" title="Photo"/>
                    <InputOption Icon={SubscriptionsIcon} color="#E7A33E" title="Video"/>
                    <InputOption Icon={EventNoteIcon} color="#C0CBCD" title="Event"/>
                    <InputOption Icon={CalendarViewDayIcon} color="#7FC15E" title="Write Article"/>
                </div>
            </div>

            {posts.map(({id,data:{name,description,message,photoUrl}})=>(
                <Post
                    key= {id}
                    name={name}
                    description = {description}
                    message = {message}
                    photoUrl = {photoUrl}
                />
            ))}
        </div>
    )
}

export default Feeds

import React, { useState } from 'react'
import './Feeds.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import PhotoIcon from '@material-ui/icons/Photo';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';

function Feeds() {
    const [posts, setPosts] =  useState([]);
    return (
        <div className="feeds">
            <div className="feeds__inputContainer">
                <div className="feeds__input">
                    <CreateIcon/>
                    <form action="">
                        <input type="text"/>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feeds__inputOption">
                    <InputOption Icon={PhotoIcon} color="#70B5F9" title="Photo"/>
                    <InputOption Icon={SubscriptionsIcon} color="#E7A33E" title="Video"/>
                    <InputOption Icon={EventNoteIcon} color="#C0CBCD" title="Event"/>
                    <InputOption Icon={CalendarViewDayIcon} color="#7FC15E" title="Write Article"/>
                </div>
            </div>
            <Post 
                name="The sauce God" 
                description="Test Post now" 
                message="message goes here"
            />
        </div>
    )
}

export default Feeds

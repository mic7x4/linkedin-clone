import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

function Post({name,photoUrl,description,message}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar/>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"/>
                <InputOption Icon={CommentOutlinedIcon} title="Comment"/>
                <InputOption Icon={ShareOutlinedIcon} title="Share"/>
                <InputOption Icon={SendOutlinedIcon} title="Send"/>
            </div>
        </div>
    )
}

export default Post

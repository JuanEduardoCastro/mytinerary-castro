import React, { useEffect, useLayoutEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';
import Comment from './Comment';
import { Link } from 'react-router-dom';

const Comments = (props) => {

    const [send, setSend] = useState(false)
    const [commentsList, setCommentsList] = useState([])
    const [comment, setComment] = useState({ itineraryId: "", userComment: "", commentId: "", flag: "send" })
    const [error, setError] = useState(false)

    useEffect (() => {
        async function getComments() {
            try {
                let response = await props.getComments(props.itineraryId)
                if (response.success) {
                setCommentsList(response.response[0].comments)
                setSend(false)
                }
            } catch (error) {
                console.log("error al traer comentarios")
            }
        }
        getComments()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [send])

    const inputHandler = (e) => {
        if (props.token) {
            setComment({
                itineraryId: props.itineraryId,
                userComment: e.target.value,
                commentId: (commentsList.length)+1,
                flag: "send"
            })
        } else {
            setError(true)
        }
    }

    const sendCommentHandler = () => {
        if (props.token) {
            props.addNewComment(props.itineraryId, comment, props.token)
            setComment({ itineraryId: "", userComment: "", commentId: "", flag: "send" })
            setSend(true) 
        } else {
            setError(true)
        }
    }
    
    const trashMessageHandle = (id, comment, token) => {
        if(props.token) {
            props.deleteCommentByUserId(id, comment, token)
            setSend(true)   
        } else {
            setError(true)
        }
    }

    const sendEditCommentHandler = (id, comment, token) => {
        if (props.token) {
            props.deleteCommentByUserId(id, comment, token)
            setSend(true)
        } else {
            setError(true)
        }
    }

    setTimeout(() => {
        setError(false)
    }, 5000)
    
    return (
        <div className="flex flex-col items-center w-full h-full rounded-md">
            <div className="flex-col items-end justify-start w-11/12 h-5/6 mt-2 overflow-y-auto">
                {commentsList.map((comment, index) => {
                    return <Comment key={index} sendEditCommentHandler={sendEditCommentHandler} trashMessageHandle={trashMessageHandle} comment={comment}  className="bg-red-300"/>
                })}
            </div> 
            <div className="relative w-4/5 flex flex-col items-center justify-center mx-auto pb-2">
                <input 
                    type="text" 
                    onChange={inputHandler}
                    value={comment.userComment}
                    placeholder="Your comment here" 
                    className="w-full pr-10 pl-3 inputBox"/> 
                <FontAwesomeIcon icon={faPaperPlane} onClick={sendCommentHandler}  className="absolute position right-3 transform rotate-45 scale-125 text-indigo-800 cursor-pointer"/>
            </div>
            <div className={error ? "block" : "hidden" } >
                <h2>You must be logged in to post a message. <Link to="/login" className="text-lg text-indigo-700">Log in!</Link></h2>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.users.token,
        userEmail: state.users.userEmailStore
    }
}

const mapDispatchToProps = {
    addNewComment: itinerariesActions.addNewComment,
    getComments: itinerariesActions.getComments,
    deleteCommentByUserId: itinerariesActions.deleteCommentByUserId
}

export default connect(mapStateToProps,mapDispatchToProps)(Comments)
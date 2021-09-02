import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';
import Comment from './Comment';

const Comments = (props) => {

    // console.log(props)
    const [send, setSend] = useState(false)
    const [commentsList, setCommentsList] = useState([])
    const [comment, setComment] = useState({ itineraryId: "", userComment: "", commentId: "", flag: "send" })

    useEffect (() => {
        async function getComments() {
            console.log("re renderiza y fetchea")
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

    },[send])

    console.log(commentsList)
    const inputHandler = (e) => {
        // console.log(e.target.value)
        setComment({
            itineraryId: props.itineraryId,
            userComment: e.target.value,
            commentId: (commentsList.length)+1,
            flag: "send"
        })
    }

    const sendCommentHandler = () => {
        console.log("send")
        props.addNewComment(props.itineraryId, comment, props.token)
        setSend(true)
        
    }
    console.log(send)
    const trashMessageHandle = (id, comment, token) => {
        console.log("click en borrar")
        props.deleteCommentByUserId(id, comment, token)
        setSend(true)
    }
    
    return (
        <div className="flex flex-col items-center w-full h-full rounded-md">
            <div className="flex-col items-end justify-start w-11/12 h-5/6 mt-2 overflow-y-auto">
            
                {/* COMENTARIO */}
                {commentsList.map((comment, index) => {
                    return <Comment key={index} trashMessageHandle={trashMessageHandle} comment={comment}  />
                })}
            
            </div> 
            <div className="relative w-4/5 flex items-center justify-center mx-auto">
                <input 
                    type="text" 
                    onChange={inputHandler}
                    placeholder="Your comment here" 
                    className="w-full pr-10 pl-3 inputBox"/> 
                <FontAwesomeIcon icon={faPaperPlane} onClick={sendCommentHandler} className="absolute position right-3 transform rotate-45 scale-125 text-indigo-800 cursor-pointer"/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.users.token,
        /* commentsFromStore: state.itineraries.commentsStore */
    }
}

const mapDispatchToProps = {
    addNewComment: itinerariesActions.addNewComment,
    getComments: itinerariesActions.getComments,
    deleteCommentByUserId: itinerariesActions.deleteCommentByUserId
}

export default connect(mapStateToProps,mapDispatchToProps)(Comments)
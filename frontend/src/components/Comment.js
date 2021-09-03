import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';


const Comment = (props) => {

    const [comment, setComment] = useState({ flag: "trash", commentId: props.comment.commentId })
    const [changeInput, setChangeInput] = useState(false)
    const [confirmOpen, setConfirmOpen] = useState(false)
    const [inputValue, setInputValue] = useState("") 

    useEffect(() => {
        setInputValue(props.comment.userComment)
        setComment({ flag: "trash", commentId: props.comment.commentId })
    }, [])
    
    //input
    const editInputHandler = (e) => {
        setInputValue(e.target.value)
        setComment({ 
            ...comment,
            userComment: e.target.value,
            flag: "edit",
        })
    }

    //boton editar
    const editCommentHandler = () => {
        setChangeInput(!changeInput)
        setComment({
            ...comment,
            userComment: inputValue,
            flag: "edit"
        })
        
    }

    //mandar msg editado
    const sendEditCommentHandler2 = () => {
        setChangeInput(!changeInput)
        setComment({ 
            ...comment,
            userComment: inputValue,
            flag: "trash",
        })

    }

    const trashMessageHandler2 = () => {
        setComment({
            ...comment,
            flag: "trash"
        })
    }

    const confirmHandler = () => {
        setConfirmOpen(true)
    }

    const closeConfirmation = () => {
        setConfirmOpen(false)
    }

    
    return (
        <div className="relative w-full ">
            <div className="w-full flex items-center justify-start gap-1 ">
                <div className=" ">
                    <div 
                    style={{backgroundImage: `url("${props.comment.userPhoto}")`}}
                    className="w-10 h-10 bg-cover bg-center rounded-full "></div>
                </div>
                <div className="relative w-11/12 h-12 flex flex-col mx-auto border border-gray rounded-lg bg-gray-100 px-2">
                    <h2 className="text-sm">{props.comment.userName}</h2>
                    {!changeInput ? <h2 className="text-base">{props.comment.userComment}</h2> : <div><input 
                    type="text" 
                    onChange={editInputHandler}
                    value={inputValue}
                    placeholder="Your comment here" 
                    className="w-full pr-10 pl-3 inputBox"/> 
                    <FontAwesomeIcon icon={faPaperPlane}  onClick={() => { props.sendEditCommentHandler(props.comment.itineraryId, comment, props.token); sendEditCommentHandler2(); }}  className="absolute position top-8 right-6 transform rotate-45 scale-125 text-indigo-800 cursor-pointer"/></div>}    
                </div>
            </div>
            <div className="flex justify-end gap-3 pr-4 py-1">
                <button className={props.userEmail === props.comment.userEmail ? "block" : "hidden"}>
                    <FontAwesomeIcon onClick={() => { confirmHandler(); trashMessageHandler2(); }}  icon={faTrashAlt} className="cursor-pointer"/>
                </button>
                <button className={props.userEmail === props.comment.userEmail ? "block" : "hidden"}>
                    <FontAwesomeIcon onClick={editCommentHandler} icon={faPencilAlt} className="cursor-pointer"/>
                </button>
            </div>
            {
            confirmOpen && <div className="absolute w-64 h-32 md:w-80 md:h-40 left-3 md:top-5 md:left-28 bg-indigo-300 bg-opacity-40 text-center border border-gray-200 rounded-md  ">
                <div className="w-full h-full flex flex-col justify-center items-center gap-8">
                    <h2 className="text-xl heroText">Are you sure?</h2>
                    <div className="flex justify-center gap-12">
                        <button onClick={closeConfirmation} className="btn py-1 px-3 ">No!</button>
                        <button onClick={() => props.trashMessageHandle(props.comment.itineraryId, comment, props.token) } className="btn py-1 px-3 ">Erase</button>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        token: state.users.token,
        userEmail: state.users.userEmailStore,
    }
}

const mapDispatchToProps = {
    deleteCommentByUserId: itinerariesActions.deleteCommentByUserId,
}

export default connect(mapStateToProps,mapDispatchToProps)(Comment)

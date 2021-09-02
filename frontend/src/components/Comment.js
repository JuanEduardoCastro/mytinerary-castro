import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';

const Comment = (props) => {

    // const [flagUp, setFlagUp] = useState("")
    const [comment, setComment] = useState({ flag: "trash", commentId: props.comment.commentId })
    
    // const trashMessageHandle = () => {
    //     props.deleteCommentByUserId(props.comment.itineraryId, comment, props.token)
    // }

    const editMessageHandle = () => {
        console.log("edit")
        // setComment({
        //     userComment: "",
        //     commentId: "",
        //     flag: "edit"
        // })
    }

    return (
        <div className="w-full ">
            <div className="w-full flex items-center justify-start gap-1 ">
                <div className=" ">
                    <div 
                    style={{backgroundImage: `url("${props.comment.userPhoto}")`}}
                    className="w-10 h-10 bg-cover bg-center rounded-full "></div>
                </div>
                <div className="w-11/12 h-12 flex flex-col mx-auto border border-gray rounded-lg bg-gray-100 px-2">
                    <h2 className="text-sm">{props.comment.userName}</h2>
                    <h2 className="text-base">{props.comment.userComment}</h2>
                </div>
            </div>
            <div className="flex justify-end gap-3 pr-4 py-1">
                <button >
                    <FontAwesomeIcon onClick={() => props.trashMessageHandle(props.comment.itineraryId, comment, props.token)} icon={faTrashAlt} className="cursor-pointer"/>
                </button>
                <button >
                    <FontAwesomeIcon onClick={editMessageHandle} icon={faPencilAlt} className="cursor-pointer"/>
                </button>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        token: state.users.token,
    }
}

const mapDispatchToProps = {
    deleteCommentByUserId: itinerariesActions.deleteCommentByUserId,
}

export default connect(mapStateToProps,mapDispatchToProps)(Comment)

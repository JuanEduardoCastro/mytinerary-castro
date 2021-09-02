import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';

const Comments = (props) => {

    const [comment, setComment] = useState("")
    const [comentarios, setComentarios] = useState([])
    
    
    useEffect(() => {
        async function getComments() {
            try {
                let response = await props.getComments(props.itineraryId)
                console.log(response)
                if (response.success) {
                    setComments(response.response[0].comments)
                }
            } catch (error) {
                console.log("error al traer comentarios")
            }
        }
        getComments()
    }, [])

    const inputHandler = (e) => {
        setComment(e.target.value)
    }

    // console.log(props)
    
    const sendMessageHandle = () => {
        props.addNewComment(props.itineraryId, comment, props.token)
    }

    console.log(comments)
    return (
        <div className="flex flex-col items-center w-full h-full rounded-md">
            <div className="flex-col items-end justify-start w-11/12 h-5/6 mt-2 p-">

                {/* COMENTARIO */}
                {comments.map((comment, index) => {
                    <div className="w-full ">
                        <div className="w-full flex items-center justify-start gap-1 ">
                            <div className=" ">
                                <div 
                                style={{backgroundImage: `url("${comment.userPhoto}")`}}
                                className="w-10 h-10 bg-cover bg-center rounded-full "></div>
                            </div>
                            <div className="w-11/12 flex flex-col mx-auto border border-gray rounded-lg bg-gray-100 px-2">
                                <h2 className="text-sm">{comment.userName}</h2>
                                <h2 className="text-base">{comment.comment}</h2>
                            </div>
                        </div>
                        <div className="flex justify-end gap-3 pr-4 py-1">
                             {/* <FontAwesomeIcon icon={faTrashAlt} className=""/>
                            <FontAwesomeIcon icon={faPencilAlt} className=""/> */}
                        </div>
                    </div>
                })}

            </div> 
            <div className="relative w-4/5 flex items-center justify-center mx-auto">
                <input 
                    type="text" 
                    onChange={inputHandler}
                    placeholder="Your comment here" 
                    className="w-full pr-10 pl-3 inputBox"/> 
                <FontAwesomeIcon icon={faPaperPlane} onClick={sendMessageHandle} className="absolute position right-3 transform rotate-45 scale-125 text-indigo-800 cursor-pointer"/>
            </div>


        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.users.token,
        userName: state.users.userNameStore,
        userPhoto: state.users.userPhotoStore
    }
}

const mapDispatchToProps = {
    addNewComment: itinerariesActions.addNewComment,
    getComments: itinerariesActions.getComments
}

export default connect(mapStateToProps,mapDispatchToProps)(Comments)

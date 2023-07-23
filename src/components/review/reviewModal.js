import React, { useState } from 'react'
import "./reviewModal.css"
import { useDataContext } from '../context/context'

const ReviewModal = ({name}) => {
    const {setIsAdd,addReview} = useDataContext()

    const [reviewRating,setReviewRating] = useState({
        rating:"",
        comment:"",
       
    })
    
    const changeHandler  = (e) => {
        setReviewRating({ ...reviewRating, [e.target.name]: e.target.value });
    }

    const submitHandler = (e) => {
        e.preventDefault()
        addReview(reviewRating,name)
        setIsAdd(false)
    }
    return (
        <div className='modal'>
            <form onSubmit={submitHandler} action="">
                <h3>Add Your Review</h3>
                <select name="rating" onChange={changeHandler}
                    value={reviewRating?.rating}>
                    <option disabled>✓ Select Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>

                </select>
                <textarea onChange={changeHandler}  name="comment" id="" cols="10" rows="10"></textarea>
                <button  className='cuisine-btn' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ReviewModal
Requires an object as an argument, we call it a configuration argument 
return an object
In the returned object it has a method name reducer
Example:

import { createSlice } from '@reduxjs/toolkit';
import { COMMENTS } from '../../app/shared/COMMENTS';


const initialState = {
    commentsArray: COMMENTS
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState
});

export const commentsReducer = commentsSlice.reducer;  
  

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    return state.comments.commentsArray.filter((comment) => comment.campsiteId === parseInt(campsiteId));
};
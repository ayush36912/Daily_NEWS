import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts, fetchPostById } from '../utils/thunks';


export const postsSlice = createSlice({
    name:'posts',
    initialState:{
        loading:true,
        articles:{
            items:[]
        }
    },
    reducers:{
        clearPostById:(state)=>{
            state.postById = {}
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPosts.pending,(state)=>{
           
        })
        .addCase(fetchPosts.fulfilled,(state,action)=>{
           
            state.articles = action.payload;
        })
        .addCase(fetchPosts.rejected,(state)=>{
            
        })
        .addCase(fetchPostById.pending,(state)=>{
            
        })
        .addCase(fetchPostById.fulfilled,(state,action)=>{
           
            state.postById = action.payload;
        })
        .addCase(fetchPostById.rejected,(state)=>{
           
        })
    }
});

export const { clearPostById } = postsSlice.actions;
export default postsSlice.reducer;
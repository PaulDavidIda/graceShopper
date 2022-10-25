import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchVinyls = createAsyncThunk("allVinyls", async () => {
    try {
      const { data } = await axios.get(`/api/vinyl`);
      return data;
    } catch (err) {
      console.log(err);
    }
  });



  const vinylSlice = createSlice ({
    name: "allVinyls",
    initialState: {
        allVinyls: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchVinyls.fulfilled , (state, action)=> {
          state.allVinyls = action.payload
        }
     )
    }
  })

  export const selectVinyls = (state) => {
    return state.allVinyls;
  };


  export default vinylSlice.reducer
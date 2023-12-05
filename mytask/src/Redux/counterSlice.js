import { createSlice } from "@reduxjs/toolkit"



const initialState={
    value:0
}


const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{

      updateInp1: (state, action) => {
        state.inp1 = action.payload;
      },
      updateInp2: (state, action) => {
        state.inp2 = action.payload;
      },
        topla:(state)=>{
            state.value=parseFloat(state.inp1)+parseFloat(state.inp2);
        },

        cix:(state)=>{
            state.value=state.inp1 - state.inp2;
        },

        incrementByUser:(state,action)=>{
            state.value=state.value+action.payload
        },
        

      vur: (state, action) => {
        state.value = state.inp1 * state.inp2;
      },
        
      bol: (state, action) => {

        if (action.payload !== 0) {
          state.value = state.inp1 / state.inp2;
        }
      }
      
      
       




    }

})



export const {updateInp1, updateInp2, topla,cix,incrementByUser,vur,bol}=counterSlice.actions
export default counterSlice.reducer 
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    items: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
}

const addToCart = createSlice({                                                  // slice creation (action + reducer)
    name: 'cart',
    initialState,     
    reducers: {
        addItem: (state, action) =>{
            // state.value += 1;
            console.log(action);
            state.items.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        removeItem: (state, action) =>{
          const cartData = state.items.filter((item) => item.id !== action.payload.id);
            state.items = cartData;
            localStorage.setItem('cart', JSON.stringify(state.items));

        },
        clearAll: (state) =>{
            state.items = [];
        }
    }
});

export const { addItem, removeItem, clearAll } = addToCart.actions;
export default addToCart.reducer;
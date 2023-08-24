const { createSlice } = require('@reduxjs/toolkit');

const chatSlice = createSlice({
    name: 'chat',
    initialState: {},
    reducers: {
        add(state, action) {

            return {...state, [0]: action.payload}
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
        addID(state, action) {
        
        return { ...state, [1]: action.payload }

        },
        addChatLog(state, action) {
            let newState = state;
            let tempID = state[1].chatID;
            let newFriends = newState[0].friends;
            console.log('a',newFriends.length);
            for(let i =0;i<newFriends.length;i++){
                if(newFriends[i].id == tempID){
                    newFriends[i].chatlog.push(action.payload);
                }
            }
            return newState;
    
        },
        
    },
});

export const { add, remove,addID, addChatLog } = chatSlice.actions;
export default chatSlice.reducer;
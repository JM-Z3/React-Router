
export const reducer = (state = [], action) => {

    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        
        case 'delete':
            return state.filter( st => st.id !== action.payload);

        case 'toggle':
            return state.map( st => {
                if(action.payload === st.id) {
                    return {
                        ...st,
                        done: !st.done
                    }
                } else {
                    return st;
                }
            })
            
            
    
        default:
            return state;
            
    }



}

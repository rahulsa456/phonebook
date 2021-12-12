export function allContactsReducer (state = [
    {
        id: 0,
        name: "Rahul Sharma",
        mobile: "9999999999",
        email: "rahul.sa456@gmail.com",
        isFav: false
    },
    {
        id: 1,
        name: "Puneet Chaudhary",
        mobile: "9999999999",
        email: "puneet@gmail.com",
        isFav: false
    },
    {
        id: 2,
        name: "Krishna Murti",
        mobile: "9999999999",
        email: "rahul.sa456@gmail.com",
        isFav: false
    },
    {
        id: 3,
        name: "kamal kant",
        mobile: "9999999999",
        email: "rahul.sa456@gmail.com",
        isFav: false
    }
], action){
    switch (action.type){
        case 'NEW_CONTACT':
            return [...state, {...action.payload, isFav: false, id: (state? (state[state.length-1].id+1): 0)}]
        case 'TOGGLE_FAV':
            let copyState =  [...state]
            state.forEach((element, i) => {
                if (action.payload === element.id){
                    copyState[i].isFav = !state[i].isFav
                }
            })
            return copyState
        default:
            return state
    }
}
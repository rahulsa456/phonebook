export function new_contact (contact){
    return {
        type: 'NEW_CONTACT',
        payload: contact
    }
}

export function toggle_fav (id){
    return {
        type: 'TOGGEL_FAV',
        payload: id
    }
}


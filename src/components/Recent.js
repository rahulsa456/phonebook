import React from 'react'
import { useSelector } from 'react-redux'
import ContactCard from './ContactCard'

function Recent() {
    const contacts = useSelector(state => state.allContacts)
    const recentCalls = useSelector(state => state.recentCalls )

    return (
        <div>
            {
                recentCalls.map(currID => {
                    let currContact = {}
                    contacts.forEach(contact => {
                        if (contact.id===currID){
                            currContact=contact
                        
                                
                        }
                        
                        
                    });
                    return (<ContactCard name = {currContact.name} mobile= {currContact.mobile} isFav= {currContact.isFav} id= {currContact.id}/>)
                }).reverse()
            }
        </div>
    )
}

export default Recent

import { createSelector } from '@ngrx/store'
import { AppState } from '../models/app-state.model'
import { Contact } from '../models/contact.model'

export const selectContacts = (state: AppState) => state.contacts
export const selectSelectedContactId = (state: AppState) => state.selectedContactId

export const getSelectedContact = createSelector(selectContacts, selectSelectedContactId, (contacts: Contact[], selectedUserId: string) => {
    if(selectedUserId && contacts.length){
        return contacts.find((contact) => contact.id === selectedUserId)
    } else {
        return null
    }
})
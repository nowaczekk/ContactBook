import { createSelector } from '@ngrx/store';
import { Contact } from './contact.model';

export interface AppState {
    readonly contacts: Contact[];
    readonly selectedContactId: string | null;
}

export const selectContacts = (state: AppState) => state.contacts
export const selectSelectedContactId = (state: AppState) => state.selectedContactId

export const getSelectedContact = createSelector(selectContacts, selectSelectedContactId, (contacts: Contact[], selectedUserId: string) => {
    if(selectedUserId && contacts.length){
        return contacts.find((contact) => contact.id === selectedUserId)
    } else {
        return null
    }
})

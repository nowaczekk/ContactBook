import { createSelector, State } from '@ngrx/store';
import { ContactAction, ContactTypes } from '../actions/contact.actions';
import { Contact } from "../models/contact.model";
import * as uuid from 'uuid';

const initialState: Array<Contact> = [{
    id: uuid.v4(),
    firstName: 'name',
    lastName: 'surname',
    phone: '222-333-444',
    email: 'example@temporary.tmp',
    address: 'some address '
}];

export function ContactsReducer( state: Array<Contact> = initialState, action: ContactAction){
    switch(action.type){
        case ContactTypes.ADD_CONTACT:
            return [...state, action.payload];
        default: 
            return state;
    }
}

import { ContactAction, ContactTypes } from '../actions/contact.actions';
import { Contact } from "../models/contact.model";
import * as uuid from 'uuid';

export const initialState: Contact[] = [{
    id: uuid.v4(),
    firstName: 'name',
    lastName: 'surname',
    phone: '222-333-444',
    email: 'example@temporary.tmp',
    address: 'some address '
}];

export function ContactsListReducer( state: Contact[] = initialState, action: ContactAction){
    switch(action.type){
        case ContactTypes.ADD_CONTACT:
            return [...state, action.payload];
        default: 
            return state;
    }
}

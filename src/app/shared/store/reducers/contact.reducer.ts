import { ContactAction, ContactTypes } from '../actions/contact.actions';
import { Contact } from "../models/contact.model";

const initialState: Array<Contact> = [{
    firstName: 'name',
    lastName: 'surname',
    phone: '222-333-444',
    email: 'example@temporary.tmp',
    address: 'some address '
}];

export function ContactReducer( state: Array<Contact> = initialState, action: ContactAction){
    switch(action.type){
        case ContactTypes.ADD_CONTACT: 
            return [...state, action.payload];
        default: 
            return state;
    }
}
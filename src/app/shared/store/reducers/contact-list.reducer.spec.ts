import { Contact } from "../models/contact.model";
import * as uuid from 'uuid';
import { AddContactAction } from '../actions/contact.actions';
import { ContactsListReducer, initialState } from './contacts-list.reducer';

describe('ContactsListReducer', () => {
    describe('ContactTypes.ADD_CONTACT', () => {
        it('should add contact to state', () => {
            const contactModel = createContact();
            const action = new AddContactAction(contactModel);
            const newState = ContactsListReducer(initialState, action);
            const expectedState = [...initialState, contactModel];

            expect(newState).toEqual(expectedState)
        })
    })
})


function createContact(): Contact {
    return {
        id: uuid.v4(),
        firstName: 'testName',
        lastName: 'testSurname',
        phone: '333-333-333',
        email: 'example@temporary.tmp',
        address: 'home address'
    } as Contact;
}
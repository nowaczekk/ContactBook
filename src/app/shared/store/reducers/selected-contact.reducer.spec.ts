import * as uuid from 'uuid';
import { SelectContactAction } from '../actions/selected-contact.actions'
import { SelectContactReducer, initialState } from './selected-contact.reducer';

describe('SelectContactReducer', () => {
    describe('SelectedContactTypes.SELECT_CONTACT', () => {
        it('should select contact', () => {
            const contactId = uuid.v4();
            const action = new SelectContactAction(contactId);
            const newState = SelectContactReducer(initialState, action);
            const expectedState = contactId;

            expect(newState).toEqual(expectedState)
        })
    })
})
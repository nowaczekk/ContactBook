import { SelectedContactAction, SelectedContactTypes } from '../actions/selected-contact.actions';

const initialState: string|null = null;

export function SelectContactReducer( state: string | null = initialState, action: SelectedContactAction){
    switch(action.type){
        case SelectedContactTypes.SELECT_CONTACT:
            return action.payload;
        default: 
            return state;
    }
}
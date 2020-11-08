import { createSelector } from '@ngrx/store';
import { Contact } from './contact.model';

export interface AppState {
    readonly contacts: Array<Contact>;
    readonly selectedContactId: string | null;
}

export const getItems = (state: AppState) => state.contacts;

export const getItemById = (id) => createSelector(getItems, (items) => items[id])
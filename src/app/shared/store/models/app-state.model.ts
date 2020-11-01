import { Contact } from './contact.model';

export interface AppState {
    readonly contacts: Array<Contact>;
}
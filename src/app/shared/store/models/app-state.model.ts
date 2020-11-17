import { Contact } from './contact.model';

export interface AppState {
    readonly contacts: Contact[];
    readonly selectedContactId: string | null;
}

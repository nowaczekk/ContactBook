import { Action } from '@ngrx/store'
import { Contact } from '../models/contact.model';

export enum ContactTypes{
    ADD_CONTACT = '[CONTACT] Add Contact'
}

export class AddContactAction implements Action{
    readonly type = ContactTypes.ADD_CONTACT;

    constructor(public payload: Contact){}
}

export type ContactAction = AddContactAction;
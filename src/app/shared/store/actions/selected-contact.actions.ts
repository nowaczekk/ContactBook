import { Action } from '@ngrx/store'
import { Contact } from '../models/contact.model';

export enum SelectedContactTypes{
    SELECT_CONTACT = '[SELECT_CONTACT] Select Contact'
}

export class SelectContactAction implements Action {
    readonly type = SelectedContactTypes.SELECT_CONTACT;

    constructor(public payload: string){}
}

export type SelectedContactAction = SelectContactAction;
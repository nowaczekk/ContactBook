import { getSelectedContact } from "./selected-contact-selector"


describe('SelectContactSelector', () => {
    describe('getSelectedContact', () => {
        it('should return selected contact', () => {
            const contacts = [
                {
                    id: '00000000-0000-0000-0000-000000000000',
                    firstName: 'testName',
                    lastName: 'testSurname',
                    phone: '333-333-333',
                    email: 'example@temporary.tmp',
                    address: 'home address'
                },
                {
                    id: '00000000-0000-0000-0000-000000000111',
                    firstName: 'testName',
                    lastName: 'another testSurname',
                    phone: '333-333-333',
                    email: 'example@temporary.tmp',
                    address: 'home address'
                }]
            let selectedContactId = '00000000-0000-0000-0000-000000000111' 


            expect(getSelectedContact.projector(contacts,selectedContactId)).toEqual(contacts[1]);
        })
    })
})
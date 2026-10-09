export interface EmailAddressVM {
    name: string;
    email: string;
    avatar: string;
}

export class EmailAddress implements EmailAddressVM {
    name: string = '';
    email: string = '';
    avatar: string = '';
}

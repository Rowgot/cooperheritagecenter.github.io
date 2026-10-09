import { EmailAddressVM, EmailAddress } from './email-address';

export interface EmailBasicVM {
    id: number;
    emailTo: EmailAddressVM;
    emailFrom: EmailAddressVM;
    subject: string;
    body: string;
    sent: string;
    received: string;
    read: string;
    replyAllowed: boolean;
}

export interface EmailVM {
    id: number;
    emailTo: EmailAddressVM;
    emailFrom: EmailAddressVM;
    subject: string;
    body: string;
    sent: string;
    received: string;
    read: string;
    replyAllowed: boolean;
    emailChain: Array<EmailBasicVM>;
}

export class Email implements EmailVM {
    id: number = 0;
    emailTo: EmailAddressVM = new EmailAddress();
    emailFrom: EmailAddressVM = new EmailAddress();
    subject: string = '';
    body: string = '';
    sent: string = '';
    received: string = '';
    read: string = '';
    replyAllowed: boolean = false;
    emailChain: Array<EmailBasicVM> = [];
}

export class EmailBasic implements EmailBasicVM {
    id: number = 0;
    emailTo: EmailAddressVM = new EmailAddress();
    emailFrom: EmailAddressVM = new EmailAddress();
    subject: string = '';
    body: string = '';
    sent: string = '';
    received: string = '';
    read: string = '';
    replyAllowed: boolean = false;
}
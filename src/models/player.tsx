export interface PlayerVM {
    name: string;
    email: string;
    avatar: string;
}

export class Player implements PlayerVM {
    name: string = '';
    email: string = '';
    avatar: string = '';
}
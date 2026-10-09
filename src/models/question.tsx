export interface QuestionVM {
    question: string;
    scoreThreshold: number;
    RankerType: string;
    strictFilters: Array<StrictFilterVM>;
}

export interface StrictFilterVM {
    name: string;
    value: string;
}

export class Question implements QuestionVM {
    question: string = '';
    scoreThreshold: number = 0;
    RankerType: string = '';
    strictFilters: Array<StrictFilter> = [];
}

export class StrictFilter implements StrictFilterVM {
    name: string = '';
    value: string = '';
}

export class EachResponse {
    /*questionid: string;
    chosenAnswer: string;
    timeTaken: number;
    answered: boolean;*/
    questionid!: string;
    chosenAnswer!: string;
    timeTaken!: number;
    answered!: boolean;

    constructor(questionid: string, chosenAnswer: string, timeTaken: number, answered: boolean) {
        this.answered = answered;
        this.chosenAnswer = chosenAnswer;
        this.questionid = questionid;
        this.timeTaken = timeTaken;
    }
}

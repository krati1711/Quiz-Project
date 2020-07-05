import { EachResponse } from './EachResponse';
export class QuizResponse {
    quizid: String;
    userEmail: String;
    EachResponses: EachResponse[] = [];

    constructor(quizid: String, userEmail: String) {
        this.quizid = quizid;
        this.userEmail = userEmail;
    }

    addResponse(EachResponse: any) {
        this.EachResponses.push = EachResponse;
    }
}
export class Question{
    id: String;
    quest: String;
    options: Array<String>;
    answer: String;

    constructor(id: String, quest: String, options: Array<String>, answer: String) {
        this.id = id;
        this.quest = quest;
        this.options = options;
        this.answer = answer;
    }
}
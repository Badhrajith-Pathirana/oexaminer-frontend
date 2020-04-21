import { Question } from "./question";

export class Exam{

    constructor(public title: string, public module: string, public date: string, public duration: string, public questionCount: string, public marks: string, public questions: Question[]){
    }
}
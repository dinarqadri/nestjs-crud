import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizesService {
    private readonly quizes = ['one', 'two']

    find(index: number){
        return this.quizes[index] ? this.quizes[index] : null
    }

    findAll(){
        return this.quizes
    }
}

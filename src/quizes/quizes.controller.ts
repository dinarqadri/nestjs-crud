import { Controller, Get, Param, Post } from '@nestjs/common';
import { QuizesService } from './quizes.service';

@Controller('quizes')
export class QuizesController {
    constructor(private quizesService: QuizesService){}

    @Get()
    quiz(){
        return this.quizesService.findAll()
    }

    @Get(':idx')
    findOne(@Param('idx') id: string){
        return this.quizesService.find(+id)
    }


    
}

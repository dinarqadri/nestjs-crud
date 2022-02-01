import { NestMiddleware, Injectable } from "@nestjs/common";

@Injectable()
export class Logger implements NestMiddleware {
    use(req: any, res: any, next: () => void) {
        console.log("Method not implemented.");
        next()
    }


}
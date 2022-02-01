import { NotAcceptableException, HttpStatus } from "@nestjs/common";

export class ValidationException extends NotAcceptableException {
    constructor() {
      super('Duplicate Email', HttpStatus.NOT_ACCEPTABLE.toString());
    }
  }
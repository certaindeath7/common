import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

// custom error handling
export class RequestValidationError extends CustomError {
  statusCode = 400;
  constructor(public errors: ValidationError[]) {
    // invoke the constructor inside the base class which is Error
    super("request error");

    // only because of extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
  serializeErrors() {
    return this.errors.map((err) => {
      return {
        message: err.msg,
        filed: err.param,
      };
    });
  }
}

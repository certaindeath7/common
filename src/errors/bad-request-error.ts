import { CustomError } from "./custom-error";

export class BadRequestError extends CustomError {
  statusCode = 400;
  constructor(message: string) {
    super(message);

    // extending a class that built in ts
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
  serializeErrors() {
    // reference the custom message that's been thrown when throwing the custom error
    return [
      {
        message: this.message,
      },
    ];
  }
}

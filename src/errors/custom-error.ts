export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    // cast the message to the built in class Error
    super(message);
    // only because of extending a built in class
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}

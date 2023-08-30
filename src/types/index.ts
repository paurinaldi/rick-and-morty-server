export interface User {
  firebaseUid?: string;
  email: string;
  name: string;
}

export interface BodyResponse<T> {
  message: string;
  data?: T;
  error: boolean;
}

export class CustomError extends Error {
  status!: number;
  message!: string;
  data?: undefined | Record<string, unknown>;

  constructor(
    status = 500,
    message: string,
    data: undefined | Record<string, unknown> = undefined
  ) {
    super();
    this.status = status;
    this.message = message;
    this.data = data;
  }
}

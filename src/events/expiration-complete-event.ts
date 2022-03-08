import { Subjects } from './subjects';

export interface IExpirationComplete {
  subject: Subjects.ExpirationComplete;
  data: {
    orderId: string;
  };
}

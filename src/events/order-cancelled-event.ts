import { Subjects } from './subjects';
export interface IOrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    version: number;
    tickets: {
      id: string;
    };
  };
}

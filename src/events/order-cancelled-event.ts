import { Subjects } from './subjects';
import { OrderStatus } from '..';
export interface IOrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    tickets: {
      id: string;
      price: number;
    };
  };
}

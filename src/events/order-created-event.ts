import { Subjects } from './subjects';
import { OrderStatus } from '..';
export interface IOrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    userId: string;
    status: OrderStatus;
    version: number;
    expiresAt: string;
    ticket: {
      id: string;
      price: number;
    };
  };
}

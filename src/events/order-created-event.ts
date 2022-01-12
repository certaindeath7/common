import { Subjects } from './subjects';
import { OrderStatus } from '..';
export interface IOrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    userId: string;
    status: OrderStatus;
    expiresAt: string;
    tickets: {
      id: string;
      price: number;
    };
  };
}

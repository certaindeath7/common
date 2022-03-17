import { Subjects } from './subjects';
import { OrderStatus } from './types/order-status';
export interface IPaymentCreatedEvent {
  subject: Subjects.PaymentCreated;
  data: {
    id: string;
    orderId: string;
  };
}

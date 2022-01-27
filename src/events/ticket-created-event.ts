import { Subjects } from './subjects';

export interface ITicketCreatedEvent {
  subject: Subjects.TicketCreated;
  data: {
    id: string;
    title: string;
    version: number;
    price: number;
    userId: string;
  };
}

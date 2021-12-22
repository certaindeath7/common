export enum OrderStatus {
  // when order's been created but it hasn't been reserved
  Created = 'created',

  // when order is trying to reserve but has already been reserved by someone
  // or was cancelled
  // order expires before payment
  Cancelled = 'cancelled',

  // successfully reserved the ticket
  AwaitingPayment = 'awaiting:payment',

  // provided payment successfully
  Complete = 'complete',
}

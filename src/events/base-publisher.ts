import { Stan } from "node-nats-streaming";
import { Subjects } from "./subjects";

interface IEvent {
  subject: Subjects;
  data: any;
}
// generic class to enforce type cheching for all the sub classes
export abstract class Publisher<T extends IEvent> {
  abstract subject: T["subject"];
  private client: Stan;
  constructor(client: Stan) {
    this.client = client;
  }

  // take some data and publish to NATS server
  publish(data: T["data"]): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.publish(this.subject, JSON.stringify(data), (err) => {
        if (err) {
          return reject(err);
        }
        console.log("Event puclished to subject", this.subject);
        resolve();
      });
    });
  }
}

import { v4 as uuidv4 } from "uuid";

export class Specification {
  id: string;
  name: string;
  description: string;
  createdAt: Date;

  constructor() {
    this.id = uuidv4();
    this.createdAt = new Date();
  }
}

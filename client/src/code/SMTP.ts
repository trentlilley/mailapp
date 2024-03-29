import axios from "axios";
import { config } from "./config";

export class Worker {

  // send message
  public async sendMessage(inTo: string, inFrom: string, inSubject: string, inMessage: string): Promise<void> {
    console.log("SMTP.Worker.sendMessage()");
    await axios.post(`${config.serverAddress}/messages`, { to : inTo, from : inFrom, subject : inSubject,
      text : inMessage
    });
  }

}

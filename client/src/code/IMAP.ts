
import axios, { AxiosResponse } from "axios";
import { config } from "./config";

// Define interface to describe a mailbox.
export interface IMailbox { name: string, path: string }

// Define interface to describe a message
export interface IMessage {
  id: string,
  date: string,
  from: string,
  subject: string,
  body?: string
}


// Performs IMAP Operations
export class Worker {

  // return all top level mailboxes
  public async listMailboxes(): Promise<IMailbox[]> {
    console.log("IMAP.Worker.listMailboxes()");
    const response: AxiosResponse = await axios.get(`${config.serverAddress}/mailboxes`);
    return response.data;

  }


  // return list of messages in a mailbox
  public async listMessages(inMailbox: string): Promise<IMessage[]> {
    console.log("IMAP.Worker.listMessages()");
    const response: AxiosResponse = await axios.get(`${config.serverAddress}/mailboxes/${inMailbox}`);
    return response.data;

  }


  // return the body of a message
  public async getMessageBody(inID: string, inMailbox: String): Promise<string> {
    console.log("IMAP.Worker.getMessageBody()", inID);
    const response: AxiosResponse = await axios.get(`${config.serverAddress}/messages/${inMailbox}/${inID}`);
    return response.data;
  }


  // delete a message
  public async deleteMessage(inID: string, inMailbox: String): Promise<void> {
    console.log("IMAP.Worker.getMessageBody()", inID);
    await axios.delete(`${config.serverAddress}/messages/${inMailbox}/${inID}`);
  }

}

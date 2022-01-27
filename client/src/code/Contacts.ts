/**
 * Uses axios to get data from the server
 * List contacts, add contact, delete contact
 */
import axios, { AxiosResponse } from "axios";
import { config } from "./config";

export interface IContact { _id?: number, name: string, email: string }

export class Worker {
  // returns a list of contacts
  public async listContacts(): Promise<IContact[]> {
    console.log("Contacts.Worker.listContacts()");
    // get server address from config.ts
    const response: AxiosResponse = await axios.get(`${config.serverAddress}/contacts`);
    return response.data;

  }

  // add contact
  public async addContact(inContact: IContact): Promise<IContact> {
    console.log("Contacts.Worker.addContact()", inContact);
    const response: AxiosResponse = await axios.post(`${config.serverAddress}/contacts`, inContact);
    return response.data;

  }

  // delete contact
  public async deleteContact(inID): Promise<void> {
    console.log("Contacts.Worker.deleteContact()", inID);
    await axios.delete(`${config.serverAddress}/contacts/${inID}`);
  }

}

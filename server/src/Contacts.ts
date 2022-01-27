import * as path from "path";
const Datastore = require("nedb");

// Define interface to describe a contact
export interface IContact {
  _id?: number,
  name: string,
  email: string
}

// Performs contact operations
export class Worker {

  // The Nedb Datastore instance for contacts.
  private db: Nedb;


  constructor() {

    this.db = new Datastore({
      filename : path.join(__dirname, "contacts.db"),
      autoload : true
    });

  }


  public listContacts(): Promise<IContact[]> {
    console.log("Contacts.Worker.listContacts()");
    return new Promise((inResolve, inReject) => {
      this.db.find(
        {},
        (inError: Error, inDocs: IContact[]) => {
          if (inError) {
            console.log("Contacts.Worker.listContacts(): Error", inError);
            inReject(inError);
          } else {
            console.log("Contacts.Worker.listContacts(): Ok", inDocs);
            inResolve(inDocs);
          }
        }
      );
    });

  }


  public addContact(inContact: IContact): Promise<IContact> {
    console.log("Contacts.Worker.addContact()", inContact);

    return new Promise((inResolve, inReject) => {
      this.db.insert(
        inContact,
        (inError: unknown, inNewDoc: IContact) => {
          if (inError) {
            console.log("Contacts.Worker.addContact(): Error", inError);
            inReject(inError);
          } else {
            console.log("Contacts.Worker.addContact(): Ok", inNewDoc);
            inResolve(inNewDoc);
          }
        }
      );
    });

  } 


  public deleteContact(inID: string): Promise<string> {
    console.log("Contacts.Worker.deleteContact()", inID);

    return new Promise((inResolve, inReject) => {
      this.db.remove(
        { _id : inID },
        { },
        (inError: unknown, inNumRemoved: number) => {
          if (inError) {
            console.log("Contacts.Worker.deleteContact(): Error", inError);
            inReject(inError);
          } else {
            console.log("Contacts.Worker.deleteContact(): Ok", inNumRemoved);
            inResolve("");
          }
        }
      );
    });

  }
}

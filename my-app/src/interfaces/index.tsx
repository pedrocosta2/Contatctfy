import { ReactNode } from "react";
import { NavigateFunction } from "react-router-dom";
export interface ISubmit {
  email: string;
  password: string;
}

export interface ISubmitResponse {
  token: string;
}

export interface IRegisterClient {
  name: string;
  email: string;
  password: string;
  phone: String;
  passwordConfirmation?: string;
}

export interface IUpdateClient {
  name?: string;
  email?: string;
  password?: string;
  phone?: String;
}

export interface IClient {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  createdAt: Date;
  contacts: IContact[];
}

export interface IContact {
  id?: string;
  name: string;
  email: string;
  phone: String;
  createdAt: string;
}

export interface IUpdateContact {
  name?: string;
  email?: string;
  phone?: String;
}

export interface IProvidersPropps {
  children: ReactNode;
}

export interface IContactProviderData {
  contactModal: boolean;
  setContactModal: React.Dispatch<React.SetStateAction<boolean>>;
  createContact: (data: IContact) => void;
  contacts: IContact[];
  editContact: (Body: IUpdateContact, data: string) => void;
  deleteContact: (data: IContact) => void;
  setContacts: React.Dispatch<React.SetStateAction<IContact[]>>;
  updateContactModal: boolean;
  setUpdateContactModal:  React.Dispatch<React.SetStateAction<boolean>>;
  contactId:string |null;
  setContactId: React.Dispatch<React.SetStateAction<string |null>>;
}

export interface IClientProviderData {
  client: IClient | null;
  setClient: React.Dispatch<React.SetStateAction<IClient | null>>;
  navigate: NavigateFunction;
  registerClient: (data: IRegisterClient) => void;
  onSubmit: (data: ISubmit) => void;
  editClient: (body: IUpdateClient) => void;
  deleteClient: () => void;
  logout: () => void;
  updateClientModal: boolean;
  setUpdateClientModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteClientModal: boolean;
  setDeleteClientModal: React.Dispatch<React.SetStateAction<boolean>>;
 
}

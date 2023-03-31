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
    password: string
    phone: String
    passwordConfirmation?: string

  }
 

  export interface IClient {
    id:string
    name: string;
    email: string;
    password: string
    phone: String
    createdAt: Date

  }

  export interface IProvidersPropps {
    children:ReactNode
    }
    
  export interface IClientProviderData {
      client: IClient|null;
      setClient: React.Dispatch<React.SetStateAction<IClient|null>>;
      navigate: NavigateFunction;
      registerClient: (data: IRegisterClient) => void;
      authenticatedClient: boolean;
      setauthenticatedClient: React.Dispatch<React.SetStateAction<boolean>>;
      onSubmit:(data: ISubmit) => void
    }
    
import { createContext, useState } from "react";
import {
  IClient,
  IClientProviderData,
  IProvidersPropps,
  IRegisterClient,
  ISubmit,
  ISubmitResponse,
} from "../../interfaces";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

export const ClientContext = createContext({} as IClientProviderData);

export const ClientProvider = ({ children }: IProvidersPropps) => {
  const [client, setClient] = useState<IClient | null>(null);
  const [authenticatedClient, setauthenticatedClient] = useState(false);

  const navigate = useNavigate();

  const registerClient = (data: IRegisterClient) => {
    console.log(data);
    api
      .post<IClient>("/clients", data)
      .then((resp) => {
        navigate("/login");
        toast("cadastro realizado com sucesso", {
          autoClose: 1500,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        toast("falha ao cadastrar", {
          autoClose: 1000,
        });
      });
  };

  const onSubmit =  (data: ISubmit) => {
    console.log(data)
    api
      .post<ISubmitResponse>("/sessions", data)
      .then((resp) => {
        localStorage.setItem("Token", resp.data.token);
        const token = localStorage.getItem("Token");
        api.defaults.headers.Authorization = `Bearer ${token}`;

        if (token) {
          api
            .get("/profile")
            .then((response) => {
              setauthenticatedClient(true);
              setClient(response.data);
              navigate("/dashboard");
            })
            .catch((err) => {
              console.log(err);
              navigate("/login");
            });
        }
      })
      .catch((err) => {
         toast("Senha ou email incorretos", {
          autoClose: 1000,
          type: "error",
        });
      });
    }

    return (
      <ClientContext.Provider
        value={{
          onSubmit,
          client,
          setClient,
          navigate,
          registerClient,
          authenticatedClient,
          setauthenticatedClient,
        }}
      >
        {children}
      </ClientContext.Provider>
    );
};

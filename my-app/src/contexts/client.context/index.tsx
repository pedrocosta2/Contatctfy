import { createContext, useState } from "react";
import {
  IClient,
  IClientProviderData,
  IProvidersPropps,
  IRegisterClient,
  ISubmit,
  ISubmitResponse,
  IUpdateClient,
} from "../../interfaces";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

export const ClientContext = createContext({} as IClientProviderData);

export const ClientProvider = ({ children }: IProvidersPropps) => {
  const [client, setClient] = useState<IClient | null>(null);
  const [updateClientModal, setUpdateClientModal] = useState<boolean>(false);
  const [deleteClientModal, setDeleteClientModal] = useState<boolean>(false);

  const navigate = useNavigate();

  const registerClient = async (data: IRegisterClient) => {
    const { passwordConfirmation, ...newBody } = data;
    await api
      .post<any>("/clients", newBody)
      .then((resp) => {
        console.log(resp.data);
        navigate("/login");
        toast("cadastro realizado com sucesso", {
          autoClose: 1500,
          type: "success"
        });
      })
      .catch((err) => {
        console.log(err);
        toast("falha ao cadastrar", {
          autoClose: 2000,
          type:"error"
        });
      });
  };

  const onSubmit = (data: ISubmit) => {
    api
      .post<ISubmitResponse>("/login", data)
      .then((resp) => {
        localStorage.setItem("Token", resp.data.token);
        const token = localStorage.getItem("Token");
        api.defaults.headers.Authorization = `Bearer ${token}`;

        if (token) {
          api
            .get("/clients/profile")
            .then((response) => {
              setClient(response.data);
              navigate("/dashboard");
              toast("cliente logado com sucesso!!", {
                autoClose: 1500,
                position: "top-right",
                theme: "light",
                type: "success"
              })
            })
            .catch((err) => {
              console.log(err);
              navigate("/login");
            });
        }
      })
      .catch((err) => {
        toast("Senha ou email incorretos", {
          autoClose: 1500,
          type: "error",
        });
      });
  };

  const editClient = (body: IUpdateClient) => {
    if (body.email === "") {
      delete body.email;
    }
    if (body.name === "") {
      delete body.name;
    }
    if (body.phone === "") {
      delete body.phone;
    }
    api
      .patch(`/clients/profile`, body)
      .then((response) => {
        setClient(response.data);
        setUpdateClientModal(false)
        toast("cliente editado com sucesso!!", {
          autoClose: 1000,
          position: "top-right",
          theme: "light",
          type: "success"
        })
      })
      .catch((err) => {
        console.log(err);
        toast("falha ao editar cliente", {
          autoClose: 1500,
          type:"error"
        });
      });
  };

  const deleteClient = () => {
    api
      .delete(`/clients/profile`)
      .then((resp) => {
        setDeleteClientModal(false)
        localStorage.clear();
        setClient(null);
        navigate("/login");
        toast("cliente deletado com sucesso!!", {
          autoClose: 2000,
          position: "top-right",
          theme: "light",
          type: "success"
        })
      })
      .catch((err) => {
        console.log(err);
        toast("falha ao deletar cliente", {
          autoClose: 1500,
          type:"error"
        });
      });
  };

  const logout = () => {
    localStorage.clear();
    setClient(null);
    navigate("/login");
    toast("logout realizado com sucesso com sucesso!!", {
      autoClose: 2000,
      position: "top-right",
      theme: "light",
      type: "success"
    })
  };

  return (
    <ClientContext.Provider
      value={{
        logout,
        onSubmit,
        editClient,
        deleteClient,
        client,
        setClient,
        navigate,
        registerClient,
        updateClientModal,
        setUpdateClientModal,
        deleteClientModal,
        setDeleteClientModal,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

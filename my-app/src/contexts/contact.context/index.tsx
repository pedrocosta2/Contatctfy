import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  IContact,
  IContactProviderData,
  IProvidersPropps,
  IUpdateContact,
} from "../../interfaces";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { ClientContext } from "../client.context";

export const ContactContext = createContext({} as IContactProviderData);

export const ContactProvider = ({ children }: IProvidersPropps) => {
  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      api
        .get("clients/profile")
        .then((response) => {
          setClient(response.data);
          setContacts(response.data.contacts);
          navigate("/dashboard");
        })
        .catch((err) => {
          console.error(err);
          navigate("/login");
        });
    } else {
      navigate("/login");
    }
  }, []);

  const { setClient } = useContext(ClientContext);
  const [contactModal, setContactModal] = useState(false);
  const [contacts, setContacts] = useState([] as IContact[]);
  const [contactId, setContactId] = useState<string | null>(null);
  const [updateContactModal, setUpdateContactModal] = useState(false);
  const navigate = useNavigate();

  const createContact = (data: IContact) => {
    api
      .post<IContact>("/contacts", data)
      .then((response) => {
        setContactModal(false);
        setContacts([...contacts, response.data]);
        toast("contato criado com sucesso!!", {
          autoClose: 1000,
          position: "top-right",
          theme: "light",
          type: "success"
        });
      })
      .catch((err) => {
        toast("falha ao criar contato (não é possivel ter contatos com emails registrados)", {
          autoClose: 3500,
          type: "error"
        });
        console.log(err);
      });
  };

  const editContact = (body: IUpdateContact, data: string) => {
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
      .patch(`/contacts/${data}`, body)
      .then((response) => {
        const updatedData = contacts.map((element) => {
          if (element.id === response.data.id) {
            element = response.data;
            return element;
          } else {
            return element;
          }
        });
        setContacts([...updatedData]);
        toast("contato editado com sucesso!!", {
          autoClose: 1000,
          position: "top-right",
          theme: "light",
          type: "success"
        });
        setUpdateContactModal(false)
      })
      .catch((err) => {
        console.log(err);
        toast("falha ao editar contato (não é possivel ter contatos com emails registrados nem editar contatos que são de outros clientes)", {
          autoClose: 3500,
          type: "error"
        });
      });
  };

  const deleteContact = (data: IContact) => {
    console.log(data);
    api
      .delete(`/contacts/${data.id}`)
      .then((response) => {
        const filteredContacts = contacts.filter((element) => element !== data);
        setContacts([...filteredContacts]);
        toast("contato deletado com sucesso!!", {
          autoClose: 1000,
          position: "top-right",
          theme: "light",
          type: "success"
        })
      })
      .catch((err) => {
        console.log(err);
        toast("falha ao deletar contato", {
          autoClose: 1500,
          type: "error"
        });
      });
  };

  return (
    <ContactContext.Provider
      value={{
        contactModal,
        contactId,
        setContactId,
        setContactModal,
        createContact,
        contacts,
        editContact,
        deleteContact,
        setContacts,
        updateContactModal,
        setUpdateContactModal,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

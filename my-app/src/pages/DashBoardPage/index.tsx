import { yupResolver } from "@hookform/resolvers/yup";
import { useContext} from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  ContactContainer,
  ContactSection,
  Container,
  DeleteContactButton,
  Division,
  Form,
  Header,
  ModalBackGround,
  Sec,
  Title,
  Title2,
  UpdateContactButton,
} from "./styles";
import { ClientContext } from "../../contexts/client.context";
import { ContactContext } from "../../contexts/contact.context";
import { IContact } from "../../interfaces";
import EditClientForm from "../../components/EditClientForm";
import EditContactForm from "../../components/EditContactForm";

const DashBoard = () => {
  const {
    client,
    deleteClient,
    logout,
    setUpdateClientModal,
    updateClientModal,
    setDeleteClientModal,
    deleteClientModal,
    navigate
  } = useContext(ClientContext);
  const {
    contactModal,
    setContactModal,
    createContact,
    contacts,
    deleteContact,
    updateContactModal,
    setUpdateContactModal,
    setContactId
  } = useContext(ContactContext);

  if (!client) {
    navigate("/login");
  }

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatorio"),
    email: yup
      .string()
      .email("tem que ser um email valido")
      .required("email obrigatorio"),
    phone: yup.string().required("Telefone obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContact>({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <Header>
        <Title>Contactfy</Title>
        <div>
        <button onClick={() => logout()}>Logout</button>
        <button onClick={() => setUpdateClientModal(true)}>
          Editar seus dados
        </button>
        <button onClick={() => setDeleteClientModal(true)}>Apagar conta</button>
        </div>
      </Header>

      <Sec>
        <Container>
          <h2>Ola, {client?.name}</h2>
          <h2>Telefone: {client?.phone}</h2>
          <h2>Email: {client?.email}</h2>
        </Container>
        <Container>
          <h3>Contacts</h3>
          {!contactModal ? (
            <button onClick={() => setContactModal(true)}>+</button>
          ) : (
            <button onClick={() => setContactModal(false)}>-</button>
          )}
        </Container>
        <ContactSection>
          {contacts.map((element, index) => (
            <ContactContainer key={index}>
              <h4>{element.name}</h4>
              <div>
                <h4>Telefone: {element.phone}</h4>
                <h4>{element.email}</h4>
                <DeleteContactButton
                  onClick={() => {
                    deleteContact(element);
                  }}
                >
                  {" "}
                  X
                </DeleteContactButton>
                <UpdateContactButton onClick={() => {
                  setUpdateContactModal(true)
                  setContactId(element.id!)
                }}>editar dados</UpdateContactButton>
              </div>
            </ContactContainer>
          ))}
        </ContactSection>

        {contactModal ? (
          <ModalBackGround>
            <Form onSubmit={handleSubmit(createContact)}>
              <div>
                <button onClick={() => setContactModal(false)}>X</button>
              </div>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                type="text"
                placeholder="Digite aqui o nome do seu contato"
                {...register("name")}
              />
              <p>{errors.name?.message}</p>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                placeholder="Digite aqui o email do seu contato"
                {...register("email")}
              />
              <p>{errors.email?.message}</p>
              <label htmlFor="phone">Telefone</label>
              <input
                id="phone"
                type="text"
                placeholder="Digite aqui o telefone do seu contato"
                {...register("phone")}
              />
              <p>{errors.phone?.message}</p>
              <button type="submit">Confirmar</button>
            </Form>
          </ModalBackGround>
        ) : null}
        {updateClientModal ? <EditClientForm /> : null}
        {updateContactModal? <EditContactForm/>:null}
        {deleteClientModal ? (
          <ModalBackGround>
            <Division>
              <div>
                <button onClick={() => setDeleteClientModal(false)}>X</button>
              </div>
              <Title2>Tem certeza qu quer apagar sua conta?</Title2>
              <button onClick={() => deleteClient()}>Apagar</button>
            </Division>
          </ModalBackGround>
        ) : null}
      </Sec>
    </>
  );
};

export default DashBoard;

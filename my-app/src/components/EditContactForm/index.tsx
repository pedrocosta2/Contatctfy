import { useContext } from "react";
import { ClientContext } from "../../contexts/client.context";
import { ModalBackGround } from "../../pages/DashBoardPage/styles";
import { Form } from "../../pages/DashBoardPage/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { IUpdateContact } from "../../interfaces";
import { ContactContext } from "../../contexts/contact.context";

const EditContactForm = () => {
  const {
   updateContactModal,
   editContact,
   setUpdateContactModal,
   contactId
  } = useContext(ContactContext);

  const {
  client
   } = useContext(ClientContext);


  const formSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email("tem que ser um email valido"),
    phone: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateContact>({
    resolver: yupResolver(formSchema),
  });



  return (
    <>
     {client? <ModalBackGround>
          <Form onSubmit={handleSubmit((event) => editContact(event, contactId!))}>
            <div>
              <button onClick={() => setUpdateContactModal(false)}>X</button>
            </div>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              placeholder="Digite aqui o nome do seu cliente"
              {...register("name")}
            />
            <p>{errors.name?.message}</p>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Digite aqui o email do seu cliente"
              {...register("email")}
            />
            <label htmlFor="phone">Telefone</label>
            <input
              id="phone"
              type="text"
              placeholder="Digite aqui o telefone do seu cliente"
              {...register("phone")}
            />
            <p>{errors.phone?.message}</p>
            <button type="submit">Confirmar</button>
          </Form>
        </ModalBackGround>:null

    
    }
       
    </>
  );
};

export default EditContactForm

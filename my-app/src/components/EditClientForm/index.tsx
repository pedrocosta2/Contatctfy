import { useContext } from "react";
import { ClientContext } from "../../contexts/client.context";
import { ModalBackGround } from "../../pages/DashBoardPage/styles";
import { Form } from "../../pages/DashBoardPage/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { IUpdateClient } from "../../interfaces";

const EditClientForm = () => {
  const {
    editClient,
    setUpdateClientModal,
    updateClientModal,
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
  } = useForm<IUpdateClient>({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
     {client? <ModalBackGround>
          <Form onSubmit={handleSubmit(editClient)}>
            <div>
              <button onClick={() => setUpdateClientModal(false)}>X</button>
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
            <p>{errors.password?.message}</p>
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

export default EditClientForm

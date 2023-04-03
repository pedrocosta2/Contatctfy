import { useForm } from "react-hook-form";
import { ButtonRegister, Container, Form, GoLogin, Sec, Title } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IRegisterClient } from "../../interfaces/index";
import { ClientContext } from "../../contexts/client.context";
import { useContext } from "react";

const RegisterPage = () => {
  const {
    registerClient,
    client,
    navigate
  } = useContext(ClientContext);
  
  if(client) {
    navigate("/login")
  }

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    phone: yup.string().required("telefone obrigatório obrigatório"),
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Deve ser um email Válido"),
    password: yup
      .string()
      .required(
        "Senha obrigatória, a senha devera conter no minimo 5 caracteres"
      )
      .min(5, "A senha deve ter no minimo 5 caracteres"),
    passwordConfirmation: yup
      .string()
      .required("Confirme sua senha")
      .oneOf([yup.ref("password")], "Passwords must match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterClient>({
    resolver: yupResolver(formSchema),
  });

  return (
    <Sec>
      <Container>
        <Title>Contactfy</Title>
        <GoLogin to="/login">Login</GoLogin>
      </Container>

      <Form onSubmit={handleSubmit(registerClient)}>
        <div>
          <h3>Crie sua conta</h3>
        </div>

        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        <p>{errors.name?.message}</p>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
        <label htmlFor="passwordConfirmation">Confirmar Senha</label>
        <input
          id="passwordConfirmation"
          type="password"
          placeholder="Digite novamente sua senha"
          {...register("passwordConfirmation")}
        />
        <p>{errors.passwordConfirmation?.message}</p>
        <label htmlFor="phone">Telefone</label>
        <input
          id="phone"
          type="text"
          placeholder="Opção de contato"
          {...register("phone")}
        />

        <p>{errors.phone?.message}</p>
        <ButtonRegister type="submit">Cadastrar</ButtonRegister>
      </Form>
    </Sec>
  );
};

export default RegisterPage;

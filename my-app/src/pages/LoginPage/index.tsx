import { ButtonLogin,  Form, GoRegister, Sec, Title } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { ISubmit } from "../../interfaces";
import { useContext } from "react";
import { ClientContext } from "../../contexts/client.context";
import { ContactContext } from "../../contexts/contact.context";
const LoginPage = () => {
    const { onSubmit, navigate, client} = useContext(ClientContext);

  if(client) {
    navigate("/dashboard")
  }
    const formSchema = yup.object().shape({
      email: yup.string().required("Nome obrigatorio").email("tem que ser um email valido"),
      password: yup.string().required("Senha obrigatória"),
    });
  
    const { register, handleSubmit, formState: { errors },} = useForm<ISubmit>({
      resolver: yupResolver(formSchema)
    });
    
    return (
      <Sec>
        <header>
        <Title>Contacfy</Title> 
        </header>
        
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h3>Login</h3>
  
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="Digite aqui seu email"
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
  
              <ButtonLogin type="submit">Entrar</ButtonLogin>
            
            <div>
              <p>Ainda não possui uma conta?</p>
             
                <GoRegister to="/register">
                  Cadastre-se
                </GoRegister>

            </div>
          </Form>
      
        
      </Sec>
    );
  };
  
  export default LoginPage;
  
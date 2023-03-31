import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  Container,
  Form,
  Header,
  LoginMessage,
  ModalBackGround,
  Sec,
  TechContainer,
  TechSection,
  Title,
} from "./styles";
import api from "../../services/api";
import { ClientContext } from "../../contexts/client.context";

interface iCreateTech {
  title: string;
  status: string;
}

const DashBoard = () => {
  const formSchema = yup.object().shape({
    title: yup.string().required("Nome obrigatorio"),
  });
  const { navigate, setauthenticatedClient, client } = useContext(ClientContext);
//   const {
//     techModal,
//     setTechModal,
//     createTech,
//     technology,
//     deleteTech,
//     setTechnology,
//     loading,
//   } = useContext(TechContext);

//   useEffect(() => {
//     const token = localStorage.getItem("Token");
//     if (token) {
//       api.defaults.headers.Authorization = `Bearer ${token}`;
//       api
//         .get("/profile")
//         .then((response) => setTechnology(response.data.techs))
//         .catch((err) => err);
//     } else {
//       navigate("/login");
//     }
//   }, [setTechnology]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iCreateTech>({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <Header>
        <Title>Contactfy</Title>
        <button
          onClick={() => {
            localStorage.clear();
            navigate("/login");
            setauthenticatedClient(false);
          }}
        >
          Logout
        </button>
      </Header>
      
        <Sec>
          <Container>
            <h2>Ola, {client?.name}</h2>
          </Container>
          {/* <Container>
            <h3>Tecnologias</h3>
            {!techModal ? (
              <button onClick={() => setTechModal(true)}>+</button>
            ) : (
              <button onClick={() => setTechModal(false)}>-</button>
            )}
          </Container> */}
          {/* <TechSection>
            {technology.map((element, index) => (
              <TechContainer key={index}>
                <h4>{element.title}</h4>
                <div>
                  <h4>{element.status}</h4>
                  <button
                    onClick={() => {
                      deleteTech(element);
                    }}
                  >
                    {" "}
                    X
                  </button>
                </div>
              </TechContainer>
            ))}
          </TechSection> */}

          {/* {techModal ? (
            <ModalBackGround>
              <Form onSubmit={handleSubmit(createTech)}>
                <div>
                  <button onClick={() => setTechModal(false)}>X</button>
                </div>

                <label htmlFor="">Nome</label>
                <input
                  type="text"
                  placeholder="escreva o nome da TEC"
                  {...register("title")}
                />
                <p>{errors.title?.message}</p>
                <label htmlFor="">Nivel de Conhecimento</label>
                <select id="" {...register("status")}>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>

                <button type="submit">Confirmar</button>
              </Form>
            </ModalBackGround>
          ) : null} */}
        </Sec>
    </>
  );
};

export default DashBoard;

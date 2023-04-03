import styled from "styled-components";

export const ModalBackGround = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 20%;
  background-color: var(--gray3);
  border-radius: var(--radius1);
  border: var(--wht) solid 1px;
  height: max-content;
  min-width: 302px;
  margin-top: 230px;

  @media (max-width: 480px) {
    width: 90%;
    min-width: initial;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  div button {
    height: 22px;
    width: 40px;
    font-size: 20px;
    background-color: transparent;
    border-style: none;

    margin-top: 5px;
  }

  label {
    align-self: flex-start;
    margin-left: 8px;
    color: var(--wht);
  }

  input {
    padding-left: 5px;
    margin-bottom: 0px;
    background-color: var(--gray2);
    height: 30px;
    width: 95%;
    border-style: none;
    border-radius: var(--radius1);
  }

  input:focus {
    border: var(--wht) solid 1px;
  }

  p {
    margin-bottom: 15px;
    color: var(--primary);
    align-self: flex-start;
    margin-left: 10px;
    font-size: var(--fontS3);
  }

  select {
    width: 95%;
    height: 30px;
    border-radius: var(--radius1);
    background-color: var(--gray2);
    color: var(--wht);
  }

  button {
    width: 95%;
    height: 30px;
    border-radius: var(--radius1);
    border-style: none;
    margin-bottom: 15px;
    background-color: var(--primary);
    color: var(--wht);
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: var(--gray1);
div {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
  button {
    height: 35px;
    width: 90px;
    border-style: none;
    border-radius: var(--radius1);
    background-color: var(--primary);
    color: var(--gray0);

    :hover {
      background-color: var(--gray2);
    }
  }
`;

export const Title = styled.h1`
  font-size: var(--fontS1);
  color: var(--primary);
  margin: 7px 0;
`;

export const Sec = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: solid var(--gray1) 1px;
  border-bottom: solid var(--gray1) 1px;
`;

export const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--wht);

  button {
    background-color: var(--gray3);
    color: var(--wht);
    width: 30px;
    height: 30px;
    font-size: 25px;
    border-style: none;
  }
`;

export const ContactSection = styled.section`
  width: 59%;
  padding: 10px 0;
  height: max-content;
  background-color: var(--gray1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius1);

  @media (max-width: 480px) {
    width: 90%;
  }
`;
export const ContactContainer = styled.div`
  width: 90%;
  height: 50px;
  background-color: var(--gray4);
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  border-radius: var(--radius1);

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 90%;
    gap: 25px;
  }


  img {
    height: 14px;
    object-fit: cover;
  }

  h4 {
    color: var(--wht);
  }
`;
export const Title2 = styled.h4`
  font-size: 15px;
  margin: 0 0 10px 0;
  color: var(--gray1);
`;
export const Division = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 20%;
  background-color: var(--gray3);
  border-radius: var(--radius1);
  border: var(--wht) solid 1px;
  height: max-content;
  min-width: 302px;
  margin-top: 230px;
  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  div button {
    height: 22px;
    width: 40px;
    font-size: 20px;
    background-color: transparent;
    border-style: none;

    margin-top: 5px;
  }

  button {
    width: 95%;
    height: 30px;
    border-radius: var(--radius1);
    border-style: none;
    margin-bottom: 15px;
    background-color: var(--primary);
    color: var(--wht);
  }

  @media (max-width: 480px) {
    width: 90%;
    min-width: initial;
  }
`;
export const DeleteContactButton = styled.button`
    background-color:var(--primary);
    border-style: none;
    height: 24px;
    width: 20px;
    border-radius: var(--radius1);
    margin: 0 10px;
    :hover {
      background-color: var(--gray2);
    }
`

export const UpdateContactButton = styled.button`
    background-color:var(--primary);
    border-style: none;
    border-radius: var(--radius1);
    width: 90px;
    height: 24px;
    :hover {
      background-color: var(--gray2);
    }
`
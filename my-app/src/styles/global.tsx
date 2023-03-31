import  { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
margin: 0;
padding: 0;
box-sizing: border-box;

}
body {
    background-color: var(--gray4);
    position: absolute;
    height: 100%;
    width: 100%;

}

:root {

--primary: #052f84;
--primaryFocus: #052669;
--primaryNegative:#59323F;
--wht:#ffffff;

--gray4:#121214;
--gray3:#212529;
--gray2:#343B41;
--gray1:#868E96;
--gray0:#F8F9FA;

--fontS1:2.1rem;
--fontS2:1.125rem;
--fontS3: 0.75rem;



--radius1:4px;

}




`
export default GlobalStyle;
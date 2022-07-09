import { createGlobalStyle } from 'styled-components';
import styled, { StyledComponent } from 'styled-components';

export const DarkGlobalStyle = createGlobalStyle`

* {
  font-family: 'Open Sans',
}

::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px #515151cc;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #42e047;
}
.textTheme {color: white}
.iconTheme {color: white}
`;

export const LightGlobalStyle = createGlobalStyle`

* {
  font-family: 'Open Sans',
}

::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px #c3c3c3cc;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #ffa500;
}
`;

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 40px;
width: 100vw - 7px;
height: 100vh;
`
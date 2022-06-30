import { createGlobalStyle } from 'styled-components';

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
`;

export const LightGlobalStyle = createGlobalStyle`
html,
body,
#root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  user-select: none;
}


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
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
	${reset}
  html{
    width: 100%;
    height: 100%;
  }
	body{
		background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    width: 100%;
    height: 100%;
    margin: 0;
    transition: .2s all ease;
	}
`;

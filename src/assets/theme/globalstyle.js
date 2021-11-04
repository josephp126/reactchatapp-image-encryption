import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
	${reset}
  * { padding: 0; margin: 0; }
  html, #root{
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
  .w-100{
    width:100%!important;
  }
  .h-100{
    height: 100%!important;
  }
  .pl-2{
    padding-left: 12px!important;
  }
  .pl-3{
    padding-left: 16px!important;
  }
  .text-center{
    text-align:center!important;
  }
  
  .app-bar, .footer-bar{
    background: ${({ theme }) => theme.bgColor};
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
  }
  main.layout-content{
    height: calc(100vh - 128px);
    overflow: auto;
    background: ${({ theme }) => theme.mainPageBg};
  }
  .primaryBg{
    background: ${({ theme }) => theme.bgColor};
  }
  .logo-img{
    width: 170px
  }
  .logo-alone-img{
    width: 100px;
  }
  .nav-link{
    color: ${({ theme }) => theme.textColor};
    text-decoration: none;
    margin-right: 10px;
    font-weight: bold;
  }

  @media only screen and (max-width: 600px){
    main.layout-content{
      height: calc(100vh - 118px);
      overflow: auto
    } 
  }
`;

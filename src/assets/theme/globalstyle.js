import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
	${reset}
  
    /** Mozilla scrollbar*/
    * {
      scrollbar-color: #CCC !important;
      scrollbar-width: thin !important;
    }
    /** Scrollbar for browser based on webkit */
    ::-webkit-scrollbar {
      width: 6px;
      height: 0px;
    }
    ::-webkit-scrollbar-thumb {
      background: #CCCCCC;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #AFAFAF;
    }
    ::-webkit-scrollbar-thumb:active {
      background: #6b6b6b;
    }
    ::-webkit-scrollbar-track {
      background: rgba(204, 204, 204, 0.3);
    }
  
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
    background: ${({ theme }) => theme.mainPageBg};
    background-color: ${({ theme }) => theme.mainPageBg};
    color: ${({ theme }) => theme.textColor};
  }
  main.layout-content{
    height: calc(100vh - 64px);
    overflow: auto;
    background: ${({ theme }) => theme.mainPageBg};
  }
  .primaryBg{
    background: ${({ theme }) => theme.bgColor};
  }
  .primaryFontColor{
    color: ${({ theme }) => theme.textColor};
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
  .chat-tab-container{
    height: calc(100% - 104px);
  }
  .chat-swapable-container{
    height: calc(100% - 72px);
  }
  .chat-swapable-container .react-swipeable-view-container{
    height: 100%;
  }
  .chat-contact-detail-con{
    width: calc(100% - 56px);
  }
  .chat-list-last-message-con{
    width: calc(100% - 50px);
  }

  .chat-detail-message-con{
    }
  .chat-detail-message-send-con{
    
  }
  .message-receive-con{
    padding: 10px;
    background: ${({ theme }) => theme.mainPageBg};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .message-send-con{
    padding: 10px;
    background: ${({ theme }) => theme.chatSendBg};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  @media only screen and (max-width: 600px){
    main.layout-content{
      height: calc(100vh - 59px);
      overflow: auto
    } 
  }

  
`;

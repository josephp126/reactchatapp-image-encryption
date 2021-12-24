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
  main.layout-content-main{
    height: calc(100vh);
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
    position: relative;
    background: ${({ theme }) => theme.bgColor};
  }
  .chat-detail-message-con:hover{
    background: ${({ theme }) => theme.hoveredMessageBg};
  }
  .chat-detail-message-send-con{
    
  }
  .message-receive-con{
    color: ${({ theme }) => theme.chatSenderNameColor};
  }
  
  .message-send-con{
    padding: 10px;
    background: ${({ theme }) => theme.chatSendBg};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .date-divider{
    z-index: 1;
    height: 0;
    border-top: thin solid ${({ theme }) => theme.dateBorderColor};
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: relative;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    pointer-events: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    --divider-color: hsl(359,calc(var(--saturation-factor, 1)*82.6%),59.4%);
    position: relative;
    left: auto;
    right: auto;
    margin-top: 20px;
    margin-bottom: 12px;
    margin-left: 1rem;
    margin-right: 0.875rem;
  }

  .date-divider-content{
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    padding: 2px 10px;
    color: ${({ theme }) => theme.textColor};
    background: ${({ theme }) => theme.bgColor};
    line-height: 13px;
    font-size: 12px;
    margin-top: -1px;
    font-weight: 600;
    border-radius: 8px;
  }

  .message-config-con{
    border: 1px solid ${({ theme }) => theme.messageConfigBorder};
    border-radius: 5px;
    background: ${({ theme }) => theme.messageConfigBg};
    z-index:1
  }

  .friends-btn{
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    color: ${({ theme }) => theme.textColor};
    transition: all ease 0.2s;
  }

  .friends-btn:hover{
    background: ${({ theme }) => theme.friendBtnHoverColor};
  }

  .friends-btn.selected{
    background: ${({ theme }) => theme.friendBtnHoverColor};
    color: ${({ theme }) => theme.pureOppositeColor};
  }

  .friends-btn.add-friend{
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    color: white;
    background: #3ba55d;
  }
  .friends-btn.add-friend.selected{
    color: #3ba55d;
    background: transparent;
  }

  .friend-list-con{
    height: calc(100% - 50px);
    overflow: auto;
  }

  .friend-list-item{
    transition: all ease 0.2s;
  }

  .friend-list-item:hover{
    cursor: pointer;
    background: ${({ theme }) => theme.friendBtnHoverColor};
  }


  .setting-icon-con{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    border-radius: 50%;
    background: ${({ theme }) => theme.mainPageBg};
    cursor: pointer;
  }

  .container{
    width: 100%;
    padding: 12px;
    margin-right: auto;
    margin-left: auto;
  }


  @media only screen and (min-width: 1400px){
    .container{
      max-width: 1320px;
    }
  }
  @media only screen and (min-width: 1200px) and (max-width: 1400px){
    .container{
      max-width: 1140px;
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1200px){
    .container{
      max-width: 960px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 992px){
    .container{
      max-width: 720px;
    }
  }
  @media only screen and (min-width: 576px) and (max-width: 768px){
    .container{
      max-width: 540px;
    }
  }
  @media only screen and (max-width: 576px){
    .container{
      max-width: 100%;
    }
  }

  @media only screen and (max-width: 600px){
    main.layout-content{
      height: calc(100vh - 59px);
      overflow: auto
    } 
  }

  
`;

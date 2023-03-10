/**
 *
 * * main style and common  style for the application
 */
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
/**
 * color theme from coolor.co
 * for the whole application
 */
export const AppTheme = {
  colors: {
    dark: "#075252",
    lessDark: "#4F4F4F",
    medium: "#557859",
    lessLight: "#F0F0F0AB",
    light: "#EDFFFB",
    checked:"#F5F5F5",
    trash: "#BB8579",
    notValid :"#ef233c",
  },
  font: {
    regular: "Poppins, cursive",
    extra: "Lobster, cursive",
    Logo: "Lobster, cursive",
  },
  BorderRadius: "0.6rem",
};


export const App = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  align-items: center;
  margin : 1rem;
  padding: 1rem;
`;

/**
 * Contient le style globale de l'application
 */
export const AppGlobalStyle = createGlobalStyle`
  :root {
    background-color:${AppTheme.colors.light};
    font-size: 18px;
    font-family: ${AppTheme.font.regular};
    box-sizing: border-box;
    
  }
  html, body, #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100vw;
    min-height: 100vh;
    margin: 0;
    padding: 0;

  }
  .hide{
    display: none;
  }
`;




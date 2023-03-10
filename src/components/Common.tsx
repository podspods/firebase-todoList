/**
 * this function About
 */

import { toggleMenu , toggleUser} from "../store/Menu.store";
import {
  IconContainer,
  MyLink,
  Title,
  TitleContainer,
} from "../style/Common.style";

export type TTopBarProps ={
  title : string,
  icon :  string,
  url : string,
}

export function TopBarMenu({title,icon,url}: TTopBarProps) {
  return (
    <TitleContainer>
      <IconContainer>
        <MyLink to={url} onClick={toggleMenu}>
          <i className={icon}></i>
        </MyLink>
      </IconContainer>
      <Title>
        <p>{title}</p>
      </Title>
    </TitleContainer>
  );
}

export function TopBarProfile({title,icon,url}: TTopBarProps) {
  return (
    <TitleContainer>
      <IconContainer>
        <MyLink to={url} onClick={toggleUser}>
          <i className={icon}></i>
        </MyLink>
      </IconContainer>
      <Title>
        <p>{title}</p>
      </Title>
    </TitleContainer>
  );
}

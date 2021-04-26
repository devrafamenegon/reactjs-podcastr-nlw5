import { useContext } from 'react';
import Switch from 'react-switch';

import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

//import styles from './styles.module.scss';
import { HeaderContainer } from './styles';
import { ThemeContext } from 'styled-components';

interface Props {
  toggleTheme(): void;
}

export function Header(props: Props) {
  const { toggleTheme } = props;
  const { colors, title } = useContext(ThemeContext);
  
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR
  });



  return (
    <HeaderContainer>
      <img src={ title === 'light' ? "/logo.svg" : "/logo-light.svg"} alt="Logo"/>

      <p>O melhor para você ouvir, sempre</p>
      <span>{currentDate}</span>

      <Switch 
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onHandleColor={colors.primary300}
        offHandleColor={colors.secondary}
        offColor="#e6e8eb"
        onColor={colors.text200}
      />
    </HeaderContainer>
  );
}
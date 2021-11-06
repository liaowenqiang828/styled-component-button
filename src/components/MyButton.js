import styled from 'styled-components';

const Button = styled.button`
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 50px;

  width: ${props => props.size === 'sm' ? ' 70px' : ''};
  height: ${props => props.size === 'sm' ? ' 35px' : ''};
  width: ${props => props.size === 'md' ? '100px' : ''};
  height: ${props => props.size === 'md' ? '50px' : ''};
  width: ${props => props.size === 'lg' ? '130px' : ''};
  height: ${props => props.size === 'lg' ? '65px' : ''};

  color: black;
  background-color: lightgray;
  
  &:hover, &:focus {
    background-color: gray;
    background-color: ${props => props.variant === 'outline' ? 'lightblue' : ''};
    background-color: ${props => props.variant === 'text' ? 'lightblue' : ''};

    cursor: ${props => props.disabled ? 'not-allowed' : ''};
    pointer-events: ${props => props.disabled ? 'all!important' : ''};
  }

  color: ${props => props.variant === 'outline' || props.variant === 'text' ? 'blue' : ''};
  color: ${props => props.disabled ? 'lightgray' : ''};
  border: ${props => props.variant === 'outline' ? '1px solid blue' : ''};
  border: ${props => props.variant === 'text' ? 'none' : ''};
  background: ${props => props.variant === 'outline' || props.variant === 'text' ? 'none' : ''};
  background-color: ${props => props.disabled ? 'red!important' : ''};
  background-color: ${props => props.color === 'default' ? 'lightgray' : ''};
  background-color: ${props => props.color === 'primary' ? 'lightblue' : ''};
  background-color: ${props => props.color === 'secondary' ? 'lightgreen' : ''};
  background-color: ${props => props.color === 'danger' ? 'yellow' : ''};
`

const WrapperButton = styled.button`
    border: none;
    border-radius: 5px;
    width: 100px;
    height: 50px;

    width: ${props => props.size === 'sm' && ' 70px' };
    height: ${props => props.size === 'sm' && ' 35px' };
    width: ${props => props.size === 'md' && '100px' };
    height: ${props => props.size === 'md' && '50px' };
    width: ${props => props.size === 'lg' && '130px' };
    height: ${props => props.size === 'lg' && '65px' };

    color: ${props => props.theme['text-black']};
    background-color: ${props => props.theme['theme-gray']};
    color: ${props => (props.size || (props.color && props.color !== 'default')) && props.theme['theme-white']};
    background-color: ${props => props.size && props.theme['theme-blue']};
    
    &:hover, &:focus {
      background-color: ${props => props.theme['theme-gray']};
      background-color: ${props => props.variant === 'outline' && props.theme['theme-light-blue']};
      background-color: ${props => props.variant === 'text' && props.theme['theme-light-blue']};

      background-color: ${props => props.color === 'default' && props.theme['theme-gray']};
      background-color: ${props => props.color === 'primary' && props.theme['primary-color-hover']};
      background-color: ${props => props.color === 'secondary' && props.theme['secondary-color-hover']};
      background-color: ${props => props.color === 'danger' && props.theme['danger-color-hover']};

      cursor: ${props => props.disabled && 'not-allowed'};
      pointer-events: ${props => props.disabled && 'all!important'};
    }

    color: ${props => (props.variant === 'outline' || props.variant === 'text') && props.theme['theme-blue']};
    color: ${props => props.disabled && props.theme['theme-light-gray']};
    border: ${props => props.variant === 'outline' && '1px solid #0C3EC3'};
    border: ${props => props.variant === 'text' && 'none'};
    background: ${props => (props.variant === 'outline' || props.variant === 'text') && 'none'};
  
    background-color: ${props => props.disabled && props.theme['theme-light-gray']};
    background-color: ${props => props.color === 'default' && props.theme['theme-light-gray']};
    background-color: ${props => props.color === 'primary' && props.theme['primary-color']};
    background-color: ${props => props.color === 'secondary' && props.theme['secondary-color']};
    background-color: ${props => props.color === 'danger' && props.theme['danger-color']};
`

function MyButton(props) {
  console.log("props", props)
  return (
    <WrapperButton 
      variant={props.variant} 
      disabled={props.disabled} 
      size={props.size}
      color={props.color}
      >
        Default</WrapperButton>
  )
}

export default MyButton
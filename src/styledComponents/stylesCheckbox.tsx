import React, { ComponentProps } from 'react';
import styled, { StyledComponent } from 'styled-components';
import {changeCheckedTask} from "../features/taskSlice";

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;


const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${(props) => (props.checked ? props.theme.bgcCirlce : 'none')};
  border: ${props => props.theme.borderCheck};
  border-radius: 20px;
  transform: translateY(2px);
  transition: all 200ms;
`;

type Props = ComponentProps<StyledComponent<any, {}>> & {checked: boolean}

export const Checkbox: React.FC<Props> = ({ checked, taskId, dispatch, ...props }) => {
    
    return (  
    <CheckboxContainer onClick={() => dispatch(changeCheckedTask(taskId))}>
        <HiddenCheckbox {...props} onChange={() => console.log(taskId)}  type="checkbox" checked={checked}/>
        <StyledCheckbox {...props} checked={checked}  />
      </CheckboxContainer>)
};
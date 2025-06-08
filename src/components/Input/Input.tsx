/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const StyledInput = styled.input`
  padding: 10px 14px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;

  &:focus {
    outline: 2px solid black;
    outline-offset: 2px;
  }
`;

export const Input = ({ label, ...props }: InputProps) => (
  <Wrapper>
    {label && <label htmlFor={props.id}>{label}</label>}
    <StyledInput id={props.id} {...props} />
  </Wrapper>
);

import styled from '@emotion/styled';

export const Container = styled.div`
  display: inline-flex;
  border: 2px solid #1956a0;
  border-radius: 4px;
  padding: 15px;
  width: 300px;
`;

export const FormInput = styled.label`
  display: contents;
  input {
    padding: 4px;
    border: 2px solid #1956a0;
    border-radius: 8px;
    margin-top: 10px;
    margin: 5px 0 15px 0;
  }
`;

export const SubmitButton = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: #1956a0;
  color: #fff;
  cursor: pointer;
`;

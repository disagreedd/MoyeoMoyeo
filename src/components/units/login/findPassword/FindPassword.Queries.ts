import { gql } from "@apollo/client";
// 이메일 인증
export const SEND_EMAIL = gql`
  mutation sendEmail($email: String!) {
    sendEmail(email: $email)
  }
`;
// 인증번호 확인
export const AUTHORIZE_RESET = gql`
  mutation authorizeReset($email: String!, $tokenInput: String!) {
    authorizeReset(email: $email, tokenInput: $tokenInput)
  }
`;

// 비밀번호 업데이트
export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      name
      password
      email
      phone
      institution
      manager
    }
  }
`;

// accessToken 재발급용도의 함수
// refreshToken 요청
import { GraphQLClient } from "graphql-request";
import { gql } from "@apollo/client";

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken
  }
`;
export async function GetAccessToken() {
  try {
    const graphQLClient = new GraphQLClient("https://momoyeo.site/graphql", {
      credentials: "include",
    });
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken;
    console.log(result, newAccessToken);
    return newAccessToken;
  } catch (error: any) {
    // refresh Token 만료된 상태면 다시 로그인해야함
    console.log(error.message, "에러");
  }
}

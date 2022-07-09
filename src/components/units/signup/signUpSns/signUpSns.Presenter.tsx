import Link from "next/link";
import * as S from "./signUpSns.Styles";

export default function SignUpSnsPageUI(props) {
  return (
    <S.OutWrapper>
      <S.Wrapper>
        <S.HeaderTitle>SNS 회원가입</S.HeaderTitle>

        <Link href="http://localhost:3000/signup/kakao">
          <a>
            <S.KakaoWrapper>
              <S.SnsIcon src="/signUp/ico-kakaotalk.svg" />
              <S.SignUpTitle>카카오로 1초 만에 회원 가입</S.SignUpTitle>
            </S.KakaoWrapper>
          </a>
        </Link>
        <Link href="http://localhost:3000/signup/naver">
          <a>
            <S.NaverWrapper>
              <S.SnsIcon src="/signUp/ico-naver.svg" />
              <S.NaverTitle>네이버로 가입</S.NaverTitle>
            </S.NaverWrapper>
          </a>
        </Link>
        <Link href="http://localhost:3000/signup/google">
          <a>
            <S.GoogleWrapper>
              <S.SnsIcon src="/signUp/ico-google.svg" />
              <S.SignUpTitle>구글로 가입</S.SignUpTitle>
            </S.GoogleWrapper>
          </a>
        </Link>

        <S.BodyWrapper>
          <S.BodyTitle onClick={props.onClickMoveToPage("/signup/new")}>
            이메일로 가입
          </S.BodyTitle>
          <S.BodyIcon src="/signUp/arrow.png" />
        </S.BodyWrapper>
      </S.Wrapper>
    </S.OutWrapper>
  );
}

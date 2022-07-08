import { useState } from "react";
import ProductsBuy from "../buy/ProductsBuy.Container";
import * as S from "./ProductsDetail.Styles";
import { Modal, Button } from "antd";
import { v4 as uuid } from "uuid";
import styled from "@emotion/styled";

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SubmitButton = styled.button`
  background: #42c2ff;
  border-radius: 1.875rem;
  color: #ffffff;
  width: 80%;
  height: 40px;
  text-align: center;
  padding: 0.625rem;
  border: none;
  margin: 1.875rem 0;
  :hover {
    cursor: pointer;
  }
`;
export default function ProductDetailUI(props) {
  const [visible, setVisible] = useState(false);
  const onClickShowBuyModal = () => {
    setVisible((prev) => !prev);
  };

  return (
    <S.Wrapper>
      <S.SummaryWrapper>
        <S.SummaryImage src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDN8fGFydHxlbnwwfHx8fDE2NTcxMTM3Mjk&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" />
        <S.SummaryContentsWrapper>
          <S.Title>상품명</S.Title>
          <S.SubtitleWrapper>
            <S.Subtitle>00000원</S.Subtitle>
            <S.ViewPickWrapper>
              <S.ViewIcon />
              <S.Label>100</S.Label>
              <S.PickIcon />
              <S.Label>11</S.Label>
            </S.ViewPickWrapper>
          </S.SubtitleWrapper>
          <S.Line />
          <S.ContentsWrapper>
            <S.Label>
              상품요약 상품요약 상품요약 상품요약 상품요약 상품요약 상품요약
              상품요약 상품요약 상품요약 상품요약 상품요약 상품요약 상품요약
              상품요약 상품요약 상품요약 상품요약 상품요약 상품요약 상품요약
              상품요약 상품요약 상품요약 상품요약 상품요약 상품요약 상품요약
              상품요약 상품요약 상품요약 상품요약 상품요약 상품요약{" "}
            </S.Label>
          </S.ContentsWrapper>
          <S.SummaryBtnWrapper>
            {props.isSeller ? (
              <>
                <S.SkyblueBtn>수정하기</S.SkyblueBtn>
                <S.WhiteBtn>삭제하기</S.WhiteBtn>
              </>
            ) : (
              <>
                <S.SkyblueBtn onClick={onClickShowBuyModal}>
                  구매하기
                </S.SkyblueBtn>
                <S.WhiteBtn>찜하기</S.WhiteBtn>
              </>
            )}
          </S.SummaryBtnWrapper>
        </S.SummaryContentsWrapper>
      </S.SummaryWrapper>
      {visible && <ProductsBuy setVisible={setVisible} />}
      <S.NavWrapper>
        <S.NavItem isActive={true}>상세보기</S.NavItem>
        <S.NavItem isActive={false}>Q&A</S.NavItem>
      </S.NavWrapper>
      <S.DetailWrapper>
        <S.DetailImage src="https://images.unsplash.com/photo-1544816155-12df9643f363?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDUxfHxwcm9kdWN0fGVufDB8fHx8MTY1NzEzNzM0MA&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" />
        <S.DetailImage src="https://images.unsplash.com/photo-1589365278144-c9e705f843ba?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDU0fHxwcm9kdWN0fGVufDB8fHx8MTY1NzEzNzM0MA&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" />
        <S.DetailContents>
          상품 상세 내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품
          상세 내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다 상품 상세 내용입니다 상품 상세
          내용입니다 상품 상세 내용입니다{" "}
        </S.DetailContents>
        <S.SellerContentsWrapper>
          판매자 정보
          <S.Label>담당자 소속 : </S.Label>
          <S.Label>담당자 이름 :</S.Label>
          <S.Label>담당자 전화번호 : </S.Label>
        </S.SellerContentsWrapper>
      </S.DetailWrapper>
      <S.NavWrapper>
        <S.NavItem isActive={false}>상세보기</S.NavItem>
        <S.NavItem isActive={true}>Q&A</S.NavItem>
      </S.NavWrapper>
    </S.Wrapper>
  );
}

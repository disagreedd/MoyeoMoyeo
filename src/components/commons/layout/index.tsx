import styled from "@emotion/styled";
import LayoutBanner from "./banner/LayoutBanner.Container";
import LayoutFooter from "./footer/LayoutFooter.Container";
import LayoutHeader from "./header/LayoutHeader.Container";
import { useRouter } from "next/router";
import { breakPoints } from "../../../commons/styles/media";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  width: 100%;
  max-width: 75rem;
  display: flex;
  margin: auto;
  font-size: 16px;
  @media ${breakPoints.mobile} {
    font-size: 14px;
  }
`;

const SHOW_BANNER = ["/", "/events"];

export default function Layout(props) {
  const router = useRouter();
  const isShowBanner = SHOW_BANNER.includes(router.asPath);
  return (
    <Wrapper>
      <LayoutHeader></LayoutHeader>
      {/* {isShowBanner && <LayoutBanner />} */}
      <Body>{props.children}</Body>
      <LayoutFooter />
    </Wrapper>
  );
}

"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import palette from "../styles/palette";
import AirbnbLogoIcon from "../../public/svgs/logo/airbnb_logo.svg";
import AirbnbLogoText from "../../public/svgs/logo/airbnb_logo_text.svg";
import usePortal from "./hooks/usePortal";
import ModalPortal from "./ModatPortal";
import AuthModal from "./auths/AuthModal";
import { useRouter } from "next/router";
// import HamburgerIcon from "../../public/svgs/header/hamburger.svg";

// import { useRouter } from "next/router";

const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px !important;
  z-index: 10;
  .header-logo-wrapper {
    display: flex;
    align-items: center;
    .header-logo {
      margin-right: 6px;
    }
    h1 {
      font-size: 21px;
      font-weight: bold;
      color: ${palette.main_pink};
    }
  }
  /** 헤더 로그인 회원가입 버튼 */
  .header-auth-buttons {
    .header-sign-up-button {
      height: 42px;
      margin-right: 8px;
      padding: 0 16px;
      border: 0;
      border-radius: 21px;
      background-color: white;
      cursor: pointer;
      outline: none;
      &:hover {
        background-color: ${palette.gray_f7};
      }
    }
    .header-login-button {
      height: 42px;
      padding: 0 16px;
      border: 0;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
      border-radius: 21px;
      background-color: white;
      cursor: pointer;
      outline: none;
      &:hover {
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
      }
    }
  }

  .header-user-profile {
    display: flex;
    align-items: center;
    height: 42px;
    padding: 0 6px 0 16px;
    border: 0;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
    border-radius: 21px;
    background-color: white;
    cursor: pointer;
    outline: none;
    &:hover {
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
    }
    img {
      margin-left: 8px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }

  /** react-ouside-click-handler div */
  .header-logo-wrapper + div {
    position: relative;
  }

  .header-usermenu {
    position: absolute;
    right: 0;
    top: 52px;
    width: 240px;
    padding: 8px 0;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    background-color: white;
    li {
      display: flex;
      align-items: center;
      width: 100%;
      height: 42px;
      padding: 0 16px;
      cursor: pointer;
      &:hover {
        background-color: ${palette.gray_f7};
      }
    }
    .header-usermenu-divider {
      width: 100%;
      height: 1px;
      margin: 8px 0;
      background-color: ${palette.gray_dd};
    }
  }
`;

const Header: React.FC = () => {
  const { openModalPortal, closeModalPortal, ModalPortal } = usePortal();
  const [isUsermenuOpened, setIsUsermenuOpened] = useState(false);
//   const router = useRouter();

  return (
    <Container>
      <Link href="/">
        <div className="header-logo-wrapper">
          <AirbnbLogoIcon className="header-logo" />
          <AirbnbLogoText />
        </div>
      </Link>
      <div className="header-auth-buttons">
        <button className="header-sign-up-button" onClick={() => {openModalPortal();}} type="button">
          회원가입
        </button>
        <button className="header-login-button" type="button" onClick={() => {openModalPortal();}}>
          로그인
        </button>
      </div>
      <ModalPortal>
        <AuthModal closeModalPortal={closeModalPortal} />
      </ModalPortal>
    </Container>
  );
};

export default React.memo(Header, () => false);

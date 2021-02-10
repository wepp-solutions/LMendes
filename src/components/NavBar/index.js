import { useState } from "react";
import Link from "next/link";
import { Container, NavBarLinks, IconMenu, SideBar } from "./styles";

export default function NavBar({ backgroundactive }) {
  const [isActiveSideBar, setActiveSideBar] = useState(false);

  return (
    <>
      <Container backgroundactive={backgroundactive}>
        <Link href="/">LMendes</Link>
        <IconMenu
          onClick={
            isActiveSideBar
              ? () => setActiveSideBar(false)
              : () => setActiveSideBar(true)
          }
        />
        <NavBarLinks>
          <Link href="/Works">Trabalhos</Link>
          <button>Contate-me</button>
        </NavBarLinks>
      </Container>

      <SideBar active={isActiveSideBar}>
        <a href="/">LMendes</a>
        <a href="Works">Trabalhos</a>
        <button>Contate-me</button>
      </SideBar>
    </>
  );
}

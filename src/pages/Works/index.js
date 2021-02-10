import Image from "next/image";
import {
  Container,
  Cards,
  Header,
  WrapperContent,
  TextsHeader,
  ImageBox,
} from "../../../styles/Works/styles";
import NavBar from "../../components/NavBar";

export default function Works() {
  return (
    <Container>
      <NavBar />
      <Header>
        <Image
          src="https://images.pexels.com/photos/2346120/pexels-photo-2346120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="img"
        />
        <TextsHeader>
          <h1>Meus Trabalhos</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            ducimus aliquid placeat, fugiat tenetur earum?
          </p>
        </TextsHeader>
      </Header>
      <WrapperContent>
        <Cards>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            doloribus soluta quidem aliquid. Sit iusto, iste perferendis
            excepturi architecto asperiores!
          </p>
        </Cards>
        <Cards>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            doloribus soluta quidem aliquid. Sit iusto, iste perferendis
            excepturi architecto asperiores!
          </p>
        </Cards>
      </WrapperContent>
      <WrapperContent>
        <Cards>
          <ImageBox>
            <Image
              src="https://images.pexels.com/photos/2422465/pexels-photo-2422465.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="img"
            />
          </ImageBox>
          <div>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              doloribus soluta quidem aliquid. Sit iusto, iste perferendis
              excepturi architecto asperiores!
            </p>
          </div>
        </Cards>
        <Cards>
          <ImageBox>
            <Image
              src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="img"
            />
          </ImageBox>
          <div>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            doloribus soluta quidem aliquid. Sit iusto, iste perferendis
            excepturi architecto asperiores!
          </p>
          </div>
        </Cards>
      </WrapperContent>
    </Container>
  );
}

import Image from "next/image";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillDribbbleCircle,
} from "react-icons/ai";

import {
  Container,
  Texts,
  ImageBox,
  Wrapper,
  Perfil,
  Intro,
} from "../../../styles/Initial/styles";
import NavBar from '../../components/NavBar'

export default function Initial() {
  return (
    <Container>
      <NavBar backgroundactive/>
      <Texts>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          aspernatur ratione, fugit eaque adipisci molestias eius quaerat
          repellendus aut officiis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur{" "}
          <strong>adipisicing elit</strong>.
        </p>
        <div>
          <AiFillLinkedin size={35} color="#fff" />
          <AiFillInstagram size={35} color="#fff" />
          <AiFillDribbbleCircle size={35} color="#fff" />
        </div>
      </Texts>

      <Wrapper>
        <ImageBox>
          <Image
            src="https://images.pexels.com/photos/2846016/pexels-photo-2846016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </ImageBox>
        <ImageBox>
          <Image
            src="https://images.pexels.com/photos/2994878/pexels-photo-2994878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </ImageBox>
        <ImageBox>
          <Image
            src="https://images.pexels.com/photos/2752037/pexels-photo-2752037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </ImageBox>
      </Wrapper>

      <Perfil>
        <ImageBox circle>
          <Image
            src="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="img"
          />
        </ImageBox>
        <div>
          <p>Luciana Mendes</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In tempora
            et accusamus nisi.
          </p>
        </div>
      </Perfil>

      <Wrapper intro>
        <Intro>
          <p>Lorem ipsum dolor sit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            ex unde quia cupiditate possimus aut quidem quibusdam praesentium
            sequi eveniet?
          </p>
        </Intro>
        <Intro>
          <p>Lorem ipsum dolor sit.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde,
            error? Unde nam molestias enim fuga odio recusandae!
          </p>
        </Intro>
      </Wrapper>
      <Wrapper intro>
        <Intro>
          <p>Lorem ipsum dolor sit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            ex unde quia cupiditate possimus aut quidem quibusdam praesentium
            sequi eveniet?
          </p>
        </Intro>
        <Intro>
          <p>Lorem ipsum dolor sit.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde,
            error? Unde nam molestias enim fuga odio recusandae!
          </p>
        </Intro>
      </Wrapper>

      <ImageBox intro>
        <Image
          src="https://images.pexels.com/photos/2123337/pexels-photo-2123337.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="img"
        />
      </ImageBox>
    </Container>
  );
}

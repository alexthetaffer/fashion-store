import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
    flex: 1;
    position: relative;
    margin: 0 8px;
    height: 70vh;
    cursor: pointer;
    overflow: hidden;

    &:hover img{
        transform: scale(1.1);
    }
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
transition: all 0.5s ease-in-out;

@media only screen and (max-width: 500px) {
    height: 25vh;
  }
`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    font-size: 2.25rem;
`

export default function CategoryItem({item}) {
  return (
    <Container>
        <Link to={item.link}>
          <Image src={item.img} />
          <Info>
              <Title>{item.title}</Title>
          </Info>
        </Link>
    </Container>
  )
}

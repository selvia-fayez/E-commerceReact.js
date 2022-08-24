import styled from "styled-components";
import { mobile } from "../resopnsive";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;
const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
const Linkk = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;
const Login = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <Button>LOGIN</Button>
            <Linkk>DO NOT YOU REMEMBER THE PASSWORD?</Linkk>
            <Linkk>
              <Link to="/Register" style={{ color: "black" }}>
                CREATE A NEW ACCOUNT
              </Link>
            </Linkk>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Login;

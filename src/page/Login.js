/* 로그인 페이지 */

/* 
    로그인을 할라면 백엔드가 필요하다. 데이터 베이스에서 해당되는 아이디를 찾고 있다면 
    비밀번호가 맞는 지 확인 절차를 거쳐서 프로파일을 제공해주는 것
*/
import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {
    const navigate = useNavigate();
    const loginUser = (event) => {
        event.preventDefault();
        setAuthenticate(true);
        navigate('/');
    };
    // 이벤트에서 제공을 해주는 함수
    // Form 이란 걸 쓰게 된다면 무조건 써야 된다. 로그인버튼을 누르면 새로고침을 막을 수 있다.

    return (
        <Container>
            <Form onSubmit={loginUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="아이디 저장" />
                </Form.Group>
                <Button variant="danger" type="submit">
                    로그인
                </Button>
            </Form>
        </Container>
    );
};
/* 
    Form태그의 쓰는 이유 : 데이터베이스에게 보내야 될 때 쓴다. 즉 로그인 등등
    요청을 데이터베이스에 보내야 된다. 아이디와 비밀번호가 맞는 지 검사를 하고 진행을 하는 느낌인데,
    내가 유저들한테 정보를 받아서 데이터베이스에게 보내야 될 때 Form 쓴다..
    내가 로그인 버튼을 누르면 새로고침이 된다. 그래서 onClick으로 이벤트를 쓰면 안 된다.
*/
/* 
    새로고침을 막기 위해 쓰는 것 Form 자체에 이벤트 = 매개변수로 event를 주고 event.preventDefault(); 
*/
export default Login;

import Login from "./Login";
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'  
import fondo from '../imgs/fondo_login.png' 

function LoginFull() {
    return (
        <div>
            <Row>
                <Col>
                <div className="div-login"></div>
                </Col>
                <Col>
                    <Card><Login /></Card>
                </Col>
            </Row>
        </div>
    );
}

export default LoginFull;
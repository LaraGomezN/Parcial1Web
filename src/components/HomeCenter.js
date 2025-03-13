import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../styles/login.css'; // Importa el archivo CSS

export default function HomeCenter() {
    return (
        <Card className="card-home">
            <Card.Body>
                <Row>
                    <Col>
                        <Image src="../imgs/menu.png" fluid className="small-image" />
                        <h1>MENU</h1>
                    </Col>
                    <Col>
                        <Image src="../imgs/tienda.png" fluid className="small-image" />
                        <h1>STORES</h1>
                    </Col>
                    <Col>
                        <Image src="../imgs/compra.png" fluid className="small-image" />
                        <h1>CART</h1>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
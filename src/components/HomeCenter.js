import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function HomeCenter() {
    return (
        <Card className="card-home">
            <Card.Body>
                <Card.Title className="card-title">Welcome to the Home Page</Card.Title>
                <Row>
                    <Col>
                        <Image src="../imgs/menu.png" fluid />
                        <p>Texto debajo de la imagen de menú</p>
                    </Col>
                    <Col>
                        <Image src="../imgs/tienda.png" fluid />
                        <p>Texto debajo de la imagen de tienda</p>
                    </Col>
                    <Col>
                        <Image src="../imgs/compra.png" fluid />
                        <p>Texto debajo de la imagen de compra</p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
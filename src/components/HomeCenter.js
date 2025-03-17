import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../styles/login.css';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export default function HomeCenter() {
    return (
        <Card className="card-home">
            <Card.Body>
                <Row>
                    <Col>
                        <Link to="/menu">
                            <Image src="../imgs/menu.png" fluid className="small-image" />
                        </Link>
                        <h1><FormattedMessage id="menu" defaultMessage="MENU" /></h1>
                    </Col>
                    <Col>
                        <Link to="/store">
                            <Image src="../imgs/tienda.png" fluid className="small-image" />
                        </Link>
                        <h1><FormattedMessage id="stores" defaultMessage="STORES" /></h1>
                    </Col>
                    <Col>
                        <Link to="/cart">
                            <Image src="../imgs/compra.png" fluid className="small-image" />
                        </Link>
                        <h1><FormattedMessage id="cart" defaultMessage="CART" /></h1>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

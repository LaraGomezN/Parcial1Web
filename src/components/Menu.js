import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { FormattedMessage } from 'react-intl';

export default function Menu() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const URL = "https://my.api.mockaroo.com/users2.json?key=a32b4ea0";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setMenu(data);
            });
    }, []);

    return (
        <div>
            <h1><FormattedMessage id="menu" defaultMessage="Menu" /></h1>
            {menu.length > 4 && (
                <Carousel>
                    {menu.slice(4, 7).map((item, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={item.img}
                                alt={`Slide ${index}`}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            )}
            <Row>
                {menu.slice(0, 4).map((item, index) => (
                    <Col key={index} md={3}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src={item.img} alt="User Avatar" />
                            <Card.Body>
                                <Card.Text>{item.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

/* 상품 상세 페이지 */
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState(null);
    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/aggie4/
        React-front-H-M/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log('데이터 잘 들어옴?', data);
        setProduct(data);
    };
    useEffect(() => {
        getProductDetail();
    }, []);
    return (
        <Container>
            <Row className="product">
                <Col className="product-img">
                    <img src={product?.img} />
                </Col>
                <Col>
                    <div className="product-area">{product?.choice === true ? 'Conscious choice' : ''}</div>
                    <div className="product-title">{product?.title}</div>
                    <div className="product-price">{'₩ ' + product?.price}</div>
                    <div className="product-new">{product?.new === true ? '신제품' : ''}</div>
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                            사이즈 선택
                        </Dropdown.Toggle>

                        <Dropdown.Menu>{product?.size.length > 0 && product.size.map((item) => <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>)}</Dropdown.Menu>
                    </Dropdown>
                    <div className="d-grid gap-2">
                        <Button variant="outline-dark" size="lg">
                            추가하기
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;

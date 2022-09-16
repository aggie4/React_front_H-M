/* 상품 전체 페이지 */
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const getProducts = async () => {
        let url = `http://localhost:3004/products`;
        let response = await fetch(url);
        let date = await response.json();
        console.log('데이터 잘 나옴?', date);
        setProductList(date);
    };
    useEffect(() => {
        getProducts();
    }, []);
    // api호출
    return (
        <div>
            <Container>
                <Row>
                    {productList.map((item) => (
                        <Col lg={3}>
                            <ProductCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductAll;

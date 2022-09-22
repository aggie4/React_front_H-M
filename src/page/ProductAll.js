/* 상품 전체 페이지 */
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';
const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const getProducts = async () => {
        let searchQuery = query.get('q') || '';
        console.log('쿼리 값은?', searchQuery);
        let url = `https://my-json-server.typicode.com/aggie4/
        React-front-H-M/products
        ?q=${searchQuery}`;
        let response = await fetch(url);
        let date = await response.json();
        setProductList(date);
    };
    useEffect(() => {
        getProducts();
    }, [query]);
    // api호출
    // 배열에 값이 없으면 최초의 랜더링 될 때 한 번만 호출이 된다.
    // 배열에 값이 있을 떄랑 없을 떄랑 하는 일이 다르다.
    // 배열안에다가 query를 넣어준다 함수를 다시 호출해달라는 의미로 넣는다
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

/* 옷 리스트 db.json 항복 가져오기 */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/product/${item.id}`);
    };
    return (
        <div className="card-list" onClick={showDetail}>
            <img src={item?.img} />
            <div className="card-area">{item?.choice === true ? 'Conscious choice' : ''}</div>
            <div className="card-title">{item?.title}</div>
            <div className="card-price">{'₩ ' + item?.price}</div>
            <div className="card-new">{item?.new === true ? '신제품' : ''}</div>
        </div>
    );
};

export default ProductCard;

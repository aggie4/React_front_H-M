/* 비밀 */
import React from 'react';
import { Navigate } from 'react-router-dom';
import ProductDetail from '../page/ProductDetail';

const PrivateRoute = ({ authenticate }) => {
    return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />;
};
/* 
	상품디테일을 눌렀을 때
	먼저 로그인을 했냐고 묻는다 맞다면 비밀스러운 페이지를 보여주고
	아니라면 로그인 창으로 경로를 바꾼다.
*/
export default PrivateRoute;

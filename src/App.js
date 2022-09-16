import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

function App() {
    const [authenticate, setAuthenticate] = useState(false);
    useEffect(() => {
        console.log('확인용', authenticate);
    }, [authenticate]);
    return (
        <div>
            <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
            <Routes>
                <Route path="/" element={<ProductAll />} />
                <Route path="login" element={<Login setAuthenticate={setAuthenticate} />} />
                <Route path="product/:id" element={<PrivateRoute authenticate={authenticate} />} />
            </Routes>
        </div>
    );
}
/* 
    Router를 영역 밖에다가 네이게이션 바를 만든다
    Router 영역 안에 있는 건 상황에 따라서 다르게 변환되지만 영역 밖엔 바뀌지 않는다 (고정)
*/
export default App;
// 1. 전체 상품 페이지, 로그인 페이지, 상품 상세 페이지 가 필요하다

// 1-1 로고, 네이게이션 바, 로그인 영역이 있다.(사라지지 않고 계속 유지된다.)

// 2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다.
// 끝

// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 끝

// 4. 상품 디테일을 눌렀으나, 로그인이 안 되어 있을 경우에는 로그인 페이지가 먼저 나온다.
// 끝

// 5. 로그인이 되어 있을 경우에는 상품 디테일 페이지를 볼 수 있다.
// 6. 로그아웃을 누르면 로그아웃이 된다.
// 7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
// 8. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.
// 9. 상품을 검색할 수 있다.

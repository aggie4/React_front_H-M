import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
    // 가독성, 재생산성을 위해 배열을 쓴다
    const navigate = useNavigate();
    /* const goToLogin = () => {
        navigate('/login');
    }; */
    // 로그인 페이지로 가기 위한 온클릭 이벤트를 추가했고 함수를 했다

    return (
        <div>
            <div>
                {authenticate === true ? (
                    <div className="login-button" onClick={() => setAuthenticate(false)}>
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그아웃</div>
                    </div>
                ) : (
                    <div className="login-button" onClick={/* goToLogin */ () => navigate('./login')}>
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그인</div>
                    </div>
                )}
            </div>
            <div className="nav-section" onClick={() => navigate('/')}>
                <img src="https://previews.123rf.com/images/danielvfung/danielvfung1905/danielvfung190500135/123680664-h-m-brand-logo-seen-in-tsim-sha-tsui-hong-kong.jpg" />
            </div>
            <div className="menu-area">
                <ul className="menu-list">
                    {menuList.map((menu) => (
                        <li>{menu}</li>
                    ))}
                </ul>
                <div className="search-box">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder="제품 검색" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;

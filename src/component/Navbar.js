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

    const search = (event) => {
        if (event.key === 'Enter') {
            let keyword = event.target.value;
            // 이벤트안에 이미 우리가 입력한 키워드 들이 들어가 있다.
            navigate(`/?q=${keyword}`);
            console.log('우리가 입력한 키워드는??', keyword);
        }
    };
    // 검색창에 검색을 하기 위해 만든다
    // 키가 입력이 될 때 마다 발생은 되는데 실행은 안 된다.
    // 우리는 엔터키를 쳤을 때만 실행이 되게끔 가지고 온다.
    // 우리가 입력한 검색어를 가지고 와서 바꿔치기를 해주면 된다. 어떻게 읽어드리는 방법은 리엑트는 좀 다르다..
    // 이미 읽어오고 싶은 벨류의 값이 event 값에 다 들어가 있다.
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
                    <input type="text" placeholder="제품 검색" onKeyPress={(event) => search(event)} />
                </div>
            </div>
        </div>
    );
};
/* 
    onKeyPress = 이벤트, 내가 아무거나 키를 입력을 했을 때 생성이 되는 이벤트
    아무거나 입력이 되서 엔터키만 가지고 오려고 인자값으로 event로 준다
*/
export default Navbar;

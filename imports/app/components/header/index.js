import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import './style.css';
const { Header:HeaderAntd } = Layout;

const Header = (props) => {
    const {title} = props;
    return (
        <HeaderAntd className='Header'>
            <h1>{title}</h1>
        </HeaderAntd>
    );
};

Header.propTypes={
    title: PropTypes.string.isRequired
}

export default Header;
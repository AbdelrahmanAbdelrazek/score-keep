import React from 'react';
import Header from './containers/header';
import Content from './containers/content';
import {Layout} from 'antd';
import 'antd/dist/antd.css';
import './style.css';

const App = () => {
    return (
        <Layout className='Layout'>
            <Header title='Score Keep'/>
            <Content/>
        </Layout>
    );
};

export default App;
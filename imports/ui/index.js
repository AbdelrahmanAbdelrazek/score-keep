import React from 'react';
import Header from './components/header';
import Content from './components/content';
import {Layout} from 'antd';
import 'antd/dist/antd.css';

const App = () => {
    return (
        <Layout className='Layout'>
            <Header title='Score Keep'/>
            <Content/>
        </Layout>
    );
};

export default App;
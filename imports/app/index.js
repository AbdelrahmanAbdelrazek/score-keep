import React, { Component } from 'react';
import RenderPlayers from '../players';
import NewPlayerForm from './newPlayerForm';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './style.css';

const { Header, Content } = Layout;

class App extends Component {
    render() {
        return (
            <Layout className='Layout'>
                <Header className='Header'>
                    <h1>Score Keep</h1>
                </Header>
                <Content className='Content'>
                    <RenderPlayers />
                    <NewPlayerForm />
                </Content>
            </Layout>
        );
    }
}

export default App;
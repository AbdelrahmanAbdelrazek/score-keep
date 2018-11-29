import React from 'react';
import PlayerList from './playerList';
import NewPlayerForm from '../newPlayerForm';
import { Layout } from 'antd';
import './style.css';
const { Content:ContentAntd } = Layout;

const Content = () => {
    return (
        <ContentAntd className='Content'>
            <PlayerList />
            <NewPlayerForm />
        </ContentAntd>
    );
};

export default Content;
import React from 'react';
import PlayerList from './players';
import NewPlayerForm from '../../components/newPlayerForm';
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
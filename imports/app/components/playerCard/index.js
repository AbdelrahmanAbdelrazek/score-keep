import React, { Component } from 'react';
import { Card, Avatar, Button } from 'antd';
import playerActions from './playerActions';
const { Meta } = Card;

const Player = (props) => {
    const { points, name, place, avatarUrl, _id } = props; //"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" 
    return (
        <Card
            actions={
                playerActions.map(({ name, icon, onClick }) =>
                    <Button
                        key={name}
                        shape='circle'
                        {...{ icon }}
                        onClick={() => onClick(_id)}
                    />
                )}
        >
            <Meta
                avatar={<Avatar src={avatarUrl} />}
                title={name}
                description={`${place} place. (${points} points)`}
            />
        </Card>
    );
};

export default Player;
import React, { Component } from 'react';
import { Card, Avatar, Button } from 'antd';
import playerActions from './playerActions';
const { Meta } = Card;

class Player extends Component {
    render() {
        const { points, name, place, avatarUrl, _id } = this.props; //"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" 
        return (
            <Card style={{ width: 300, marginTop: 16 }}
                actions={
                    playerActions.map(({ name, icon, onClick }) =>
                        <Button
                            key={name}
                            shape='circle'
                            {...{ icon }}
                            onClick={onClick.bind(this, _id)}
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
    }
}

export default Player;
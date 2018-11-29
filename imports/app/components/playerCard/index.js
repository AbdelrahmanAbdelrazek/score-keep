import React from 'react';
import { Card, Avatar, Button } from 'antd';
import playerActions from './playerActions';
import PropTypes from 'prop-types';

const { Meta } = Card;

const Player = (props) => {
    const { points, name, place, avatarUrl, _id } = props;
    return (
        <Card style={{minWidth:'250px'}}
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

Player.propTypes = {
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    avatarUrl: PropTypes.string,
    place: PropTypes.number.isRequired,
}

export default Player;
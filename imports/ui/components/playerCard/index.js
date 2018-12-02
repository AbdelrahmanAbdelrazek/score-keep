import React from 'react';
import { Card, Avatar, Button } from 'antd';
import playerActions from './playerActions';
import PropTypes from 'prop-types';

const { Meta } = Card;

const Player = (props) => {
    const { points, name, place, avatarUrl, _id } = props;
    return (
        <Card className='player-card'
            actions={
                playerActions.map(({ name, icon, onClick }) =>
                    <Button className='player-card__action-buttons'
                        key={name}
                        shape='circle'
                        {...{ icon }}
                        onClick={() => onClick(_id)}
                    />
                )}
        >
            <Meta
                avatar={<Avatar className='player-card__avatar' src={avatarUrl} />}
                title={<p className='player-card__name'>{name}</p>}
                description={<p className='player-card__stats'>{`${place} place. (${points} points)`}</p>}
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
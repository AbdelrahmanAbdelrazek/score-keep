import React, { Component } from 'react';
import PlayerCard from '../playerCard';
import { uniq } from 'lodash';
import { Players } from '../../../api';
import { Tracker } from 'meteor/tracker';

class renderPlayers extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        Tracker.autorun(() => {
            const sortedPlayers = Players.find({}, { sort: { points: -1 } }).fetch();
            this.setState({ players: this.addPlaceToPlayers(sortedPlayers) });
        })
    }

    addPlaceToPlayers(sortedPlayers) {
        const scores = uniq(sortedPlayers.map(player => player.points));
        const playersWithPlace = sortedPlayers.map(player => ({ ...player, place: scores.indexOf(player.points) + 1 }));
        return playersWithPlace;
    }

    render() {
        const { players = [] } = this.state;
        return (
            players.length ? players.map(player =>
                <PlayerCard key={player._id} {...player} />) :
                <div className='item'>
                    <p className='item__message'>Add your first player to get started!</p>
                </div>
        );
    }
}

export default renderPlayers;
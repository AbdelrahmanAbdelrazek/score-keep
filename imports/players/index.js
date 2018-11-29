import React, { Component } from 'react';
import PlayerCard from './playerCard';
import { uniq, sortBy } from 'lodash';
import { Players } from '../api';
import { Tracker } from 'meteor/tracker';

class renderPlayers extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        Tracker.autorun(() => {
            const players = Players.find().fetch();
            this.setState({ players: this.addPlaceToPlayers(players) });
        })
    }

    addPlaceToPlayers(players) {
        const scores = uniq(players.map(player => player.points)).sort().reverse();
        const playersWithPlace = players.map(player => ({ ...player, place: scores.indexOf(player.points) + 1 }));
        return sortBy(playersWithPlace, player => player.place);
    }

    render() {
        return (
            (this.state.players||[]).map(player =>
                <PlayerCard key={player._id} {...player} />)
        );
    }
}

export default renderPlayers;
import React, { Component } from 'react';
import PlayerCard from '../playerCard';
import { uniq } from 'lodash';
import { Players } from '../../../api';
import { Tracker } from 'meteor/tracker';
import { Flipper, Flipped } from "react-flip-toolkit";

class renderPlayers extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        Tracker.autorun(() => {
            const sortedPlayers = Players.find({}, { sort: { points: -1 } }).fetch();
            this.setState(this.addPlaceToPlayers(sortedPlayers));
        })
    }

    addPlaceToPlayers(sortedPlayers) {
        const scores = uniq(sortedPlayers.map(player => player.points));
        const players = sortedPlayers.map(player => ({ ...player, place: scores.indexOf(player.points) + 1 }));
        return { players, flipKey: players.map(p => p._id).join("") };
    }
    renderPlayers() {
        const { players = [], flipKey } = this.state;
        console.log(flipKey, players);
        return <Flipper flipKey={flipKey}>
            {players.map(player =>
                <Flipped key={player._id} flipId={player._id}>
                    <div><PlayerCard {...player} /></div>
                </Flipped>)}
        </Flipper>
    }
    render() {
        const { players = [] } = this.state;
        return (
            players.length ? this.renderPlayers() :
                <div className='item'>
                    <p className='item__message'>Add your first player to get started!</p>
                </div>
        );
    }
}

export default renderPlayers;
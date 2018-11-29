import {Players} from '../../api';

export default [
    {
        name: 'addOnePoint',
        icon: 'plus-circle',
        onClick: id => Players.update(id, {$inc:{points: 1}})
    },
    {
        name: 'subOnePoint',
        icon: 'minus-circle',
        onClick: id => Players.update(id, {$inc:{points: -1}})
    },
    {
        name: 'removePlayer',
        icon: 'close-circle',
        onClick: id => Players.remove(id)
    }
]
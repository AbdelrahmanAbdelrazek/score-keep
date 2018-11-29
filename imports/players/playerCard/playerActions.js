import { Players } from '../../api';

export default [
    {
        name: 'addOnePoint',
        icon: 'plus',
        onClick(id) {
            Players.update(id, { $inc: { points: 1 } })
        }
    },
    {
        name: 'subOnePoint',
        icon: 'minus',
        onClick(id) {
            Players.update(id, { $inc: { points: -1 } })
        }
    },
    {
        name: 'removePlayer',
        icon: 'close',
        onClick(id) {
            Players.remove(id);
        }
    }
]
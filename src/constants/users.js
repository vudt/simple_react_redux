const uuidv4 = require('uuid/v4');

export default () => {
    return [
        {
            id: uuidv4(),
            fullname: 'Messi',
            age: 32,
            club: 1
        },
        {
            id: uuidv4(),
            fullname: 'Ronaldo',
            age: 34,
            club: 2
        },
        {
            id: uuidv4(),
            fullname: 'Neymar',
            age: 27,
            club: 3
        },
        {
            id: uuidv4(),
            fullname: 'Hazard',
            age: 28,
            club: 4
        }
    ]
}
const users = [
    {
        name: 'Eliézer',
        user: 'eliezer',
        password: '123',
        age: 26,
    },
    {
        name: 'Jonatas',
        password: '1234',
        user: 'jonata',
        age: 16,
    },
]
const money = [
    1000,
    2000,
    3000,
    4000,
    5000,
]

const old = users.filter(x => x.age > 25);

const searchUser = users.find(x => x.user == 'jonata' && x.password == '1234')

const newUsers = users.map(x => {
    return { ...x, name: x.name.toUpperCase() }
});

const newMoney = money.map(x => x * 1.03)

console.log(newMoney);
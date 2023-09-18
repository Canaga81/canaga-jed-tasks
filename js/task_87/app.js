const users=[
    {
        id:1, 
        username:"Ali",
        img:'images/ali.jpg',
        job:'developer'
    },
    {
        id:2,
        username:'bedbext_developer',
        img:'images/bedbext_developer.jpg',
        job:'test2',
    },
    {
        id:3,
        username:'duman',
        img:'images/duman.jpg',
        job:'test3',
    },
    {
        id:4,
        username:'js_oyrenen_shexs',
        img:'images/js_oyrenen_shexs.jpg',
        job:'test4',
    },
    {
        id:5,
        username:'qarli_daglar',
        img:'images/qarli_daglar.jpg',
        job:'test5',
    },
    {
        id:6,
        username:'qoca_cinar',
        img:'images/qoca_cinar.jpg',
        job:'test6',
    },
    {
        id:7,
        username:'visselka',
        img:'images/visselka.jpg',
        job:'test7',
    },
    {
        id:8,
        username:'novxani',
        img:'images/novxani.jpg',
        job:'test8',
    },
]
const root = document.getElementById('root');
const rootSection = document.querySelector('.root-section')
//   your code goes here

users.forEach((user) => {
    const userDiv = document.createElement('div');
    userDiv.className = 'card';

    userDiv.innerHTML = `
            <h2>${user.username}</h2>
            <p>${user.job}</p>
    `;

    rootSection.appendChild = userDiv;
    root.appendChild = rootSection;
})
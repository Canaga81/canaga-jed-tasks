const users = [
    {
        id: 1,
        username: "Ali",
        img: 'images/ali.jpg',
        job: 'developer'
    },
    {
        id: 2,
        username: 'bedbext_developer',
        img: 'images/bedbext_developer.jpg',
        job: 'test2',
    },
    {
        id: 3,
        username: 'duman',
        img: 'images/duman.jpg',
        job: 'test3',
    },
    {
        id: 4,
        username: 'js_oyrenen_shexs',
        img: 'images/js_oyrenen_shexs.jpg',
        job: 'test4',
    },
    {
        id: 5,
        username: 'qarli_daglar',
        img: 'images/qarli_daglar.jpg',
        job: 'test5',
    },
    {
        id: 6,
        username: 'qoca_cinar',
        img: 'images/qoca_cinar.jpg',
        job: 'test6',
    },
    {
        id: 7,
        username: 'visselka',
        img: 'images/visselka.jpg',
        job: 'test7',
    },
    {
        id: 8,
        username: 'novxani',
        img: 'images/novxani.jpg',
        job: 'test8',
    },
]

const rootEl = document.getElementById('root');
const rootSec = document.querySelector('.root-section');

users.forEach((user) => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <div class="image">
            <img src="${user.img}" alt="card-image">
        </div>

        <div class="text">
            <h2>${user.username}</h2>
            <p>${user.job}</p>
        </div>
    `;

    rootSec.appendChild(card);
    rootEl.appendChild(rootSec)
});
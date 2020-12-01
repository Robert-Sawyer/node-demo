//pobieram biblotekę express i ustawiam port
const express = require('express');
const port = process.env.PORT || 5000;

//tworzę zmienną reprezentującą moją aplikację
const app = express();

//chcę, żeby w momencie gdy użytkownik wejdzie na stronę, tj użyje requesta get i ustawiam ścieżkę root

app.get('/', function (req, res) {
    res.send('No cześć')
})
app.get('/oMnie', function (req, res) {
    res.send('To jest strona o mnie')
})

app.listen(port)

// app.set('view engine', 'hbs');
//
// app.get('/', (req, res) => {
//     res.render('index', {
//         pageTitle: 'node',
//         bodyContent: 'helo blablabla'
//     })
// })
//
// app.listen(port);
//
// const util = require('./utils')
//
// util.greetings()
// util.adding(2,6)



// //poniżej sposób na tworzenie serwera bez użycia biblitoeki express, która upraszcza ten proces
//
//
// //w celu stworzenia własnego serwera poprzez node pobieram moduł noda - http,
// const http = require('http')
// //(w międzyczasie tworzę też adres portu
// const port = 5000
//
// //tworzę handler, żeby przekazać polecenie wykonania jakiejś akcji
// // po załadowaniu się serwera. w tym przypadku po wejściu na localhost:5000
// //pojawi się komunikat No cześć
// const handler = (req, res) => {
//     console.log('new user')
//     res.end('No cześć')
// }
//
// //moduł http zawiera w sobie metodę tworzącą serwer do którego przekazuję handler
// const server = http.createServer(handler)
//
// //serwer musi nasłuchiwać na adres portu i zwrócić jakiś callback (funkcja
// //przekazana do metody listen) który zabezpieczy przez ewentualnym błędem
// server.listen(port, (error) => {
//     if (error) {
//         return console.log('Coś poszło nie tak')
//     }
//     console.log('Serwer się odpala...')
// })

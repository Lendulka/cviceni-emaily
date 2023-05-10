console.log('emaily')

import { Inbox } from './Inbox/index.js'

const inboxElm = document.querySelector('#inbox')

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread')
    .then((response) => response.json())
    .then((data) => {
        inboxElm.innerHTML += Inbox({
            emails: data.emails,
            unread: 'true',
        })
    })

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read')
    .then((response) => response.json())
    .then((data) => {
        inboxElm.innerHTML += Inbox({
            emails: data.emails,
            unread: 'false',
        })
    })

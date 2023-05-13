console.log('emaily')

import { EmailSection } from './EmailSection/index.js'

const appElm = document.querySelector('#app')

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread')
    .then((response) => response.json())
    .then((data) => {
        appElm.append(EmailSection({
            heading: 'Nepřečtené',
            emails: data.emails,
            folder: 'unread',
        }))
    })

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read')
    .then((response) => response.json())
    .then((data) => {
        appElm.append(EmailSection({
            heading: 'Přečtené',
            emails: data.emails,
            folder: 'read',
        }))
    })



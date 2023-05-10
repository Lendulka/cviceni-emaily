console.log('emaily')
/*
const DisplayEmail = (props) => {
    const { sender, subject, time, unread } = props
    let buttonClass = ''
    if (unread === true) {
        buttonClass = 'closed'
    } if (unread === false) {
        buttonClass = 'opened'
    }

    return `
        <div class="email">
            <div class="email__head">
                <button class="email__icon email__icon--${buttonClass}"></button>
                <div class="email__info">
                    <div class="email__sender">${sender.name}</div>
                    <div class="email__subject">${subject}</div>
                </div>
                <div class="email__time">${time}</div>
            </div>
            <div class="email__body"></div>
        </div>
    `
}

const inboxUnreadElm = document.querySelector('#inbox--unread')

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread')
    .then((response) => response.json())
    .then((data) => {
        inboxUnreadElm.innerHTML += data.emails
            .map(oneEmail => DisplayEmail(oneEmail))
            .join('')
    })

const inboxReadElm = document.querySelector('#inbox--read')

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read')
    .then((response) => response.json())
    .then((data) => {
        inboxReadElm.innerHTML += data.emails
            .map(oneEmail => DisplayEmail(oneEmail))
            .join('')
    })
*/

const Email = (props) => {
    const { sender, subject, time, unread } = props
    let buttonClass = ''
    if (unread === true) {
        buttonClass = 'closed'
    } if (unread === false) {
        buttonClass = 'opened'
    }

    return `
        <div class="email">
            <div class="email__head">
                <button class="email__icon email__icon--${buttonClass}"></button>
                <div class="email__info">
                    <div class="email__sender">${sender.name}</div>
                    <div class="email__subject">${subject}</div>
                </div>
                <div class="email__time">${time}</div>
            </div>
            <div class="email__body"></div>
        </div>
    `
}

const Inbox = (props) => {
    const { emails, unread } = props
    let inboxClass = ''
    let headingClass = ''
    if (unread === 'true') {
        inboxClass = 'unread'
        headingClass = 'Nepřečtené'
    } if (unread === 'false') {
        inboxClass = 'read'
        headingClass = 'Přečtené'
    }

    return `
        <div class="inbox inbox--${inboxClass}">
            <h2>${headingClass}</h2>
            ${emails.map(oneEmail => Email(oneEmail)).join('')}
        </div>
        
    `
}

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

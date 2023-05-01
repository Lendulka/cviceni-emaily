console.log('emaily')

const filterEmailsRead = (emails) => {
    let inboxReadElm = document.querySelector('#inbox-read')
    inboxReadElm.innerHTML +=
        emails
            .filter(oneEmail => oneEmail.unread === false)
            .map((oneEmail) => `
                <div class="email">
                    <div class="email__head">
                        <button class="email__icon email__icon--opened"></button>
                        <div class="email__info">
                            <div class="email__sender">${oneEmail.sender.name}</div>
                            <div class="email__subject">${oneEmail.subject}</div>
                        </div>
                        <div class="email__time">${oneEmail.time}</div>
                    </div>
                    <div class="email__body"></div>
                </div>
                `
            )
            .join('')
}

const filterEmailsUnread = (emails) => {
    let inboxUnreadElm = document.querySelector('#inbox-unread')
    inboxUnreadElm.innerHTML +=
        emails
            .filter(oneEmail => oneEmail.unread === true)
            .map((oneEmail) => `
                <div class="email">
                    <div class="email__head">
                        <button class="email__icon email__icon--closed"></button>
                        <div class="email__info">
                            <div class="email__sender">${oneEmail.sender.name}</div>
                            <div class="email__subject">${oneEmail.subject}</div>
                        </div>
                        <div class="email__time">${oneEmail.time}</div>
                    </div>
                    <div class="email__body"></div>
                </div>
                `
            )
            .join('')
}

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails')
    .then(response => response.json())
    .then(data => {
        console.log(data.emails)
        filterEmailsUnread(data.emails)
        filterEmailsRead(data.emails)
    })



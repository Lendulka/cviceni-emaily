
export const Email = (props) => {
    const { id, sender, subject, time, unread, body } = props

    let buttonClass = ''
    if (unread) {
        buttonClass = 'closed'
    } if (!unread) {
        buttonClass = 'opened'
    }

    const element = document.createElement('div')
    element.classList.add('email')

    if (body !== undefined) {
        element.classList.add('email--expand')
    } else {
        element.classList.remove('email--expand')
    }

    element.innerHTML = `
        <div class="email__head">
            <button class="email__icon email__icon--${buttonClass}"></button>
            <div class="email__info">
                <div class="email__sender">${sender.name}</div>
                <div class="email__subject">${subject}</div>
            </div>
            <div class="email__time">${time}</div>
        </div>
        <div class="email__body">${body}</div>
    `

    element.querySelector('.email__icon').addEventListener('click', () => {
        if (body === undefined) {
            fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    element.replaceWith(
                        Email({
                            sender: sender,
                            subject: subject,
                            time: time,
                            unread: unread,
                            id: id,
                            body: data.body,
                        })
                    )
                })
            return element

        } else {
            element.replaceWith(
                Email({
                    sender: sender,
                    subject: subject,
                    time: time,
                    unread: unread,
                    id: id,
                })
            )
            return element
        }
    })

    return element
}

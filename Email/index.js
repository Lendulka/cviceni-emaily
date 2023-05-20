
export const Email = (props) => {
    const { id, senderName, subject, time, unread, body } = props

    let buttonClass = ''
    if (unread) {
        buttonClass = 'closed'
    } if (!unread) {
        buttonClass = 'opened'
    }

    const element = document.createElement('div')
    element.classList.add('email')

    if (body) {
        element.classList.add('email--expand')
    } else {
        element.classList.remove('email--expand')
    }

    element.innerHTML = `
        <div class="email__head">
            <button class="email__icon email__icon--${buttonClass}"></button>
            <div class="email__info">
                <div class="email__sender">${senderName}</div>
                <div class="email__subject">${subject}</div>
            </div>
            <div class="email__time">${time}</div>
        </div>
        <div class="email__body">${body}</div>
    `

    element.querySelector('.email__icon').addEventListener('click', () => {
        if (!body) {
            fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    const { sender, subject, time, unread, id, body } = data
                    element.replaceWith(
                        Email({
                            senderName: sender.name,
                            subject,
                            time,
                            unread,
                            id,
                            body,
                        })
                    )
                })
            return element

        } else {
            element.replaceWith(
                Email({
                    senderName,
                    subject,
                    time,
                    unread,
                    id,
                })
            )
            return element
        }
    })

    return element
}

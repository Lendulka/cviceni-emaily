
export const Email = (props) => {
    const { sender, subject, time, unread } = props
    let buttonClass = ''
    if (unread) {
        buttonClass = 'closed'
    } if (!unread) {
        buttonClass = 'opened'
    }

    const element = document.createElement('div')
    element.classList.add('email')
    element.innerHTML = `
        <div class="email__head">
            <button class="email__icon email__icon--${buttonClass}"></button>
            <div class="email__info">
                <div class="email__sender">${sender.name}</div>
                <div class="email__subject">${subject}</div>
            </div>
            <div class="email__time">${time}</div>
        </div>
        <div class="email__body"></div>
    `
    return element
}


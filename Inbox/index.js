
import { Email } from '../Email/index.js'

export const Inbox = (props) => {
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

import { Email } from '../Email/index.js'

export const EmailSection = (props) => {
    const { heading, emails, folder } = props

    const element = document.createElement('section')
    element.classList.add('inbox')
    element.innerHTML = `
        <h2>${heading}</h2>
        <div class="emails" id=${folder}></div>
    `

    const listEmails = emails.map(oneEmail => Email(oneEmail))
    element.querySelector('.emails').append(...listEmails)

    return element
}



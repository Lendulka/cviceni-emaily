
import { Email } from '../Email/index.js'

export const EmailSection = (props) => {
    const { heading, folder, emailResult } = props

    const element = document.createElement('section')
    element.classList.add('inbox')
    element.innerHTML = `
            <h2>${heading}</h2>
            <div class="emails" id=${folder}></div>
        `

    if (emailResult === 'loading') {
        fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=${folder}`)
            .then((response) => response.json())
            .then((data) => {
                element.replaceWith(
                    EmailSection({
                        heading: heading,
                        emailResult: data.emails,
                        folder: folder,
                    })
                )
            })
        return element
    }

    const listEmails = emailResult.map(oneEmail => Email(oneEmail))
    element.querySelector('.emails').append(...listEmails)

    return element
}



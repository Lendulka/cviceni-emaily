console.log('emaily')

import { EmailSection } from './EmailSection/index.js'

const headElm = document.createElement('h1')
headElm.textContent = 'Příchozí pošta'

const appElm = document.querySelector('#app')

appElm.append(headElm)

appElm.append(
    EmailSection({ heading: 'Nepřečtené', folder: 'unread', emailResult: 'loading' }),
    EmailSection({ heading: 'Přečtené', folder: 'read', emailResult: 'loading' })
)

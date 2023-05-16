console.log('emaily')

import { EmailSection } from './EmailSection/index.js'

const appElm = document.querySelector('#app')

appElm.append(
    EmailSection({ heading: 'Nepřečtené', folder: 'unread', emailResult: 'loading' }),
    EmailSection({ heading: 'Přečtené', folder: 'read', emailResult: 'loading' })
)

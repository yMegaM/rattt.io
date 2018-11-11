import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faCoffee,
    faCookieBite
} from '@fortawesome/free-solid-svg-icons'

//Change emojis to local svg's

import pparot from 'assets/emojis/pparrot.gif'
import tspin from 'assets/emojis/tspin.gif'

const symbols = {
    X: <span className='blockContent'>X</span>,
    O: <span className='blockContent'>O</span>,
    Cookie: <span className='blockContent'><FontAwesomeIcon icon={faCookieBite} /></span>,
    Café: <span className='blockContent'><FontAwesomeIcon icon={faCoffee} /></span>,
    Pizza: <span aria-label="Pizza Emoji" className='blockContent emojiIcon' role="img">🍕</span>,
    Rato: <span aria-label="Rato Emoji" className='blockContent emojiIcon' role="img">🐀</span>,
    PartyParot: <span className='blockContent'> <img src={pparot} /> </span>,
    ThinkSpin: <span className='blockContent'> <img src={tspin} /> </span>,
}

// Pizza: <span aria-label="Pizza Emoji" className='blockContent emojiIcon' role="img">🍕</span>
export default symbols
import { world } from './names'
import './style.css'

const h1 = document.createElement('h1')
h1.innerText = `hello ${world}!`
document.body.appendChild(h1)

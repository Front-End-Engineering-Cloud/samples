import { log } from 'common-1'
import { warn } from 'common-2'
import './style.css'

log(2)
warn(2)
import('common-async-1').then(
  ({ error }) => error(2)
)
import('./common-async-2').then(
  ({ info }) => info(2)
)

import { log } from 'common-1'
import { warn } from 'common-2'
import './style.css'

log(1)
warn(1)
import('common-async-1').then(
  ({ error }) => error(1)
)
import('./common-async-2').then(
  ({ info }) => info(1)
)

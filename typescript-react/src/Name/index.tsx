import React from 'react'
import style from './style.m.less'

export type Props = {
  name: string
}

export default function Name({ name }: Props) {
  return <span className={style.name}>{name}</span>
}

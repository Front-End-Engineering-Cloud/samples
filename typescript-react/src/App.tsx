import React, { useEffect, useState } from 'react'
import Logo from './logo.svg'
import Name from './Name'

export default function App() {
  const [name, setName] = useState('')

  useEffect(() => {
    import('./extra').then(extra => {
      setName(extra.name)
    })
  }, [])

  return (
    <div className="App">
      <Logo style={{ width: '100px' }} />
      Hello
      <Name name={name} />
      !
    </div>
  )
}

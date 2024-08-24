import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {

  const err = useRouteError()
  return (
    <>
    <h1>Something went wrong</h1>
    <h1>
      {err.status}: {err.statusText}
    </h1>
    </>
  )
}

export default Error
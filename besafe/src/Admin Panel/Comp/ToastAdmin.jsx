import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

const ToastAdmin = ({msg}) => {
  return (
    <div>
        <Alert status='error'>
  <AlertIcon />
  <AlertTitle>{msg}</AlertTitle>
  {/* <AlertDescription>Your Chakra experience may be degraded.</AlertDescription> */}
</Alert>
    </div>
  )
}

export default ToastAdmin
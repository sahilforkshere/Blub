import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

const AuthLayout = () => {
    const {isSignedIn} = useAuth();
    if (isSignedIn) {
        <Redirect  href={"/"}/>
    }
  return (
    <Stack/>
  )
}

export default AuthLayout
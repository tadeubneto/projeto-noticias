import NextAuth from 'next-auth'
import { authConfig } from './src/auth.config'

export const { auth, signIn, signOut } = NextAuth(authConfig)
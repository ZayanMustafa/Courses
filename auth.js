import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
// import Facbook from "next-auth/providers/facebook"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google ],
})

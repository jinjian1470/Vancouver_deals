import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // 这里可以添加真实的用户验证逻辑
        // 现在只是简单的演示
        if (credentials?.email && credentials?.password) {
          return {
            id: '1',
            name: 'Demo User',
            email: credentials.email,
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      // 首次登录时，将用户信息添加到 token
      if (account && user) {
        token.userId = user.id;
        token.provider = account.provider;
      }
      return token;
    },
    async session({ session, token }) {
      // 将用户信息添加到 session
      if (token.userId) {
        session.user.id = token.userId;
        session.user.provider = token.provider;
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET || 'your-secret-key-here',
});

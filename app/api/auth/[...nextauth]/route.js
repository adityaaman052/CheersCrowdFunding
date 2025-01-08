import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import mongoose from 'mongoose';
import User from '@/models/user';
import connectDB from '@/db/connectDb';

export const authoptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "github") {
        try {
          await connectDB(); // Use your connectDB utility function
          
          // Check if the user already exists in the database
          const currentUser = await User.findOne({ email: user.email });
          
          if (!currentUser) {
            // Create a new user if not found
            const newUser = await User.create({
              email: user.email,
              username: user.email.split("@")[0],
            });
            user.name = newUser.username;
            console.log('New user created:', newUser);
          } else {
            user.name = currentUser.username;
            console.log('Existing user:', currentUser);
          }

          return true;
        } catch (error) {
          console.error('Error during sign in:', error);
          return false;
        }
      }
      return true;
    },

    async session({ session, user, token }) {
      try {
        // Find the user by email to get the username
        const dbUser = await User.findOne({ email: session.user.email });
        session.user.name = dbUser?.username || session.user.email.split('@')[0]; // Fallback to email prefix
        
        return session;
      } catch (error) {
        console.error('Error during session callback:', error);
        return session;
      }
    },
  },
});

export { authoptions as GET, authoptions as POST };

// pages/index.tsx
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import Image from 'next/image';
import { authOptions } from './lib/authOptions';

export default async function Home() {

  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <>
        Signed in as {session.user!.email} <br />
          <Image className='border-2 shadow-md rounded-full' src={session.user!.image!} alt="profile" width={50} height={50} />
        <br />
        <Link href={'/auth'}>
        view profile
        </Link>
        <div className='mx-3'></div>
        
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Link
        href='/api/auth/signin'
      >
        Sign in
      </Link>
    </>
  );
}

// meta tags

export const metadata = {
  title: 'Home',
  description: 'Home page of the app',
  keywords: 'home, app',
  authors: [{ name: 'Your Name', url: 'https://yourwebsite.com' }],
  creator: 'Your Name',
  publisher: 'Your Company',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Home',
    description: 'Home page of the app',
    url: 'https://yourwebsite.com',
    siteName: 'Your Site Name',
    images: [
      {
        url: 'https://yourwebsite.com/image.jpg',
        width: 800,
        height: 600,
        alt: 'Image description',
        type: 'image/jpeg',
      },
    ]
  },
};
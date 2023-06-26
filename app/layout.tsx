import Header from '@components/header';
import '@styles/globals.scss';

// Defining font - doc from https://nextjs.org/docs/app/building-your-application/optimizing/fonts
import { Inter } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

// Metadata of page /- documentation from :
// https://nextjs.org/docs/app/building-your-application/optimizing/metadata
// Inspiration from https://vercel.com/templates/next.js/taxonomy

export const metadata = {
  title: {
    default: 'My app',
    template: '%s | My app',
  },
  description: 'Description',
  keywords: ['Next.js', 'React', 'Keyword1', 'Keyword2'],
  authors: [
    {
      name: 'Juliane Casier',
      url: 'https://www.linkedin.com/in/juliane-casier-bb642832/',
    },
  ],
  //To improve SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    icons: {
      shortcut: '/favicon.ico',
    },
  },
};
const PrimaryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='fr-FR' className={inter.className}>
      <body>
        <div className='mainWrapper'>
          <Header />

          <div className='section'>{children}</div>
        </div>
      </body>
    </html>
  );
};

export default PrimaryLayout;

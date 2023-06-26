import localFont from 'next/font/local';
import Footer from '@components/footer';
import Header from '@components/header';
import '@styles/globals.scss';

// Defining font - doc from https://nextjs.org/docs/app/building-your-application/optimizing/fonts
import { Inter } from 'next/font/google';

const manjari = localFont({
  src: '../public/fonts/Manjari-Regular.woff2',
  weight: '700',
  variable: '--manjari',
  //To avoid layout shift and insure font will always show
  display: 'swap',
});
const ubuntu = localFont({
  src: '../public/fonts/Ubuntu-Regular.woff2',
  weight: '700',
  variable: '--ubuntu',
  display: 'swap',
});

// Metadata of page /- documentation from :
// https://nextjs.org/docs/app/building-your-application/optimizing/metadata
// Inspiration from https://vercel.com/templates/next.js/taxonomy

export const metadata = {
  title: {
    default: 'Juliane Casier',
    template: '%s | Juliane Casier',
  },
  description: 'Description',
  keywords: ['portfolio', 'Next.js', 'React', 'Juliane Casier'],
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
    <html lang='fr-FR' className={`${ubuntu.variable} ${manjari.variable}`}>
      <body>
        <div className='mainWrapper'>
          <Header />

          <div className='section'>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default PrimaryLayout;

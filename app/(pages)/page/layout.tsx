import Footer from '@components/footer';
import Header from '@components/header';

const StaticLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className='section'>{children}</div>;
};

export default StaticLayout;

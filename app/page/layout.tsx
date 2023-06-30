import styles from '@styles/modules/StaticLayout.module.scss';

const StaticLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={`container ${styles.staticLayout}`}>{children}</div>;
};

export default StaticLayout;

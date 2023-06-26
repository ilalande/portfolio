const StaticLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='section'>
      <p>Here is a static layout</p>
      {children}
    </div>
  );
};

export default StaticLayout;

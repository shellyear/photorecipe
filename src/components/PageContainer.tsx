const PageContainer = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="mx-auto max-w-6xl p-6 pb-0">
        {children}
      </div>
    );
  };
  
export default PageContainer;
import React from 'react'

export const WrapperSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="main pt-8 pb-8">
      <div className="main-content">{children}</div>
    </div>
  );
};

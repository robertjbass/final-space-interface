import React from "react";

const Grid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-flow-row gap-8 place-items-center grid-cols-1 xs:grid-cols-2  sm:grid-cols-3 md-2:grid-cols-3 xl:grid-cols-4">
      {children}
    </div>
  );
};

export default Grid;

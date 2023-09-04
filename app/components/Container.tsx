import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = (props: Props) => {
  return (
    <div className={` w-[90%] mx-auto max-w-7xl ${props.className ?? ""}`}>
      {props.children}
    </div>
  );
};

export default Container;

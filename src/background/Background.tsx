import type { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
};

const Background = (props: IBackgroundProps) => (
  <div className={props.color}
  style={{
    backgroundColor: `${props.color}`,
  }}
  >{props.children}</div>
);

export { Background };

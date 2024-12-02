import { PropsWithChildren } from 'react';
import classNames from 'classnames';

interface Props {
  type?: 'Primary' | 'Secondary';
}

export const SectionContainer = ({
  type = 'Primary',
  children,
}: PropsWithChildren<Props>): JSX.Element => {
  const containerClasses = classNames({
    'px-4': true,
    'py-6': true,
    border: true,
    'rounded-lg': true,
    'bg-bgSecondary': type === 'Secondary',
    [`border-border${type}`]: true,
  });

  return <div className={containerClasses}>{children}</div>;
};

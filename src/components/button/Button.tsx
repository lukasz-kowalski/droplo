import { PropsWithChildren } from 'react';
import classNames from 'classnames';

interface Props {
  type?: 'Primary' | 'Secondary';
  textColor?: 'Primary' | 'Secondary' | 'Tertiary';
}

export const Button = ({
  type = 'Primary',
  textColor = 'Primary',
  children,
}: PropsWithChildren<Props>): JSX.Element => {
  const buttonClassNames = classNames({
    flex: true,
    'items-center': true,
    'gap-2': true,
    'px-2.5': true,
    'py-3.5': true,
    border: true,
    'rounded-lg': true,
    'text-sm': true,
    [`btnText${textColor}`]: true,
    [`bg-btnBg${type}`]: true,
    [`border-btnBorder${type}`]: true,
    'shadow-sm': true,
    'shadow-btnShadowColor': true,
  });

  return <button className={buttonClassNames}>{children}</button>;
};

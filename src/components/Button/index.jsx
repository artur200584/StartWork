import clsx from 'clsx';
import style from './Button.module.scss';

const Button = ({ variant = 'text', children, ...props }) => {
  const className = clsx(
    variant === 'shadow' ? style.buttonShadow : style.buttonText
  );

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;

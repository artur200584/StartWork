import clsx from 'clsx';
import style from './Button.module.scss';

const Button = ({ variant = 'text', children, className, ...props }) => {
  const variantClassName = clsx(
    variant === 'shadow' ? style.buttonShadow : style.buttonText,
    variant === 'primary' && style.buttonPrimary
  );

  return (
    <button className={clsx(variantClassName, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;

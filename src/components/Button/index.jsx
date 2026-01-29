import clsx from 'clsx';
import style from './Button.module.scss';

const Button = ({ variant = 'text', children, type, className, ...props }) => {
  const variantClassName = clsx(
    variant === 'shadow' ? style.buttonShadow : style.buttonText,
    variant === 'primary' && style.buttonPrimary
  );

  return (
    <button
      type={type}
      className={clsx(variantClassName, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

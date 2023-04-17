import styles from './Button.module.scss';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({
  children,
  onClick,
  type,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={styles.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

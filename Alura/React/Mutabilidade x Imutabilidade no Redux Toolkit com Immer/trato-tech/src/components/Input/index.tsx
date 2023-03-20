import { forwardRef, LegacyRef } from 'react';
import styles from './Input.module.scss';

type CustomInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default forwardRef(function Input(
  { className, onChange, value, ...props }: CustomInputProps,
  ref: LegacyRef<HTMLInputElement> | undefined
) {
  return (
    <input
      ref={ref}
      className={`${styles.input} ${className}`}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
});

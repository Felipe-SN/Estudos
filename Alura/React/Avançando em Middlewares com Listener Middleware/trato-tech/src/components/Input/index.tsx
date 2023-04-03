import { forwardRef, LegacyRef } from 'react';
import styles from './Input.module.scss';

type CustomInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default forwardRef(function Input(
  { className, ...props }: CustomInputProps,
  ref: LegacyRef<HTMLInputElement> | undefined
) {
  return (
    <input {...props} ref={ref} className={`${styles.input} ${className}`} />
  );
});

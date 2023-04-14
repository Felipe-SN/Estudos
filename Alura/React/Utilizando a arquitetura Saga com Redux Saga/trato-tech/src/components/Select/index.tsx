import { forwardRef, LegacyRef } from 'react';
import styles from './Select.module.scss';

type CustomSelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

export default forwardRef(function Select(
  { value, onChange, children, ...outrosProps }: CustomSelectProps,
  ref: LegacyRef<HTMLSelectElement> | undefined
) {
  return (
    <select
      ref={ref}
      value={value}
      onChange={onChange}
      {...outrosProps}
      className={styles.select}
    >
      {children}
    </select>
  );
});

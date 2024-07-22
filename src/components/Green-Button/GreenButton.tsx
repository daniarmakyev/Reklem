import React from "react";
import styles from "./greenButton.module.css";

interface GreenButtonProps {
  children?: React.ReactNode | string;
  className?: React.ReactNode | string;
}

function GreenButton({ children, className }: GreenButtonProps): JSX.Element {
  return (
    <button type="submit" className={`${styles.directoryBtn} ${className}`}>
      {children}
    </button>
  );
}

export default GreenButton;

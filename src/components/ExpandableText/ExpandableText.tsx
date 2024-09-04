import { ReactNode, useDebugValue, useState } from "react";
import styles from "./ExpandableText.module.css";

interface Props {
  children: ReactNode;
  maxChars: number;
}

const ExpandableText = ({ children, maxChars }: Props) => {
  const [style, setStyle] = useState(styles.shrink);
  const onClick = () => {
    if (style === styles.shrink) {
      setStyle(styles.expanded);
    } else {
      setStyle(styles.shrink);
    }
  };

  return (
    <>
      <p className={style}>{children}</p>
      <button onClick={onClick}>Shrink!</button>
    </>
  );
};

export default ExpandableText;

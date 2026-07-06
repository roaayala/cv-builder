import { Children } from "react";

export default function TextInputGroup({ groupTitle, children }) {
  return (
    <div>
      <p>{groupTitle}</p>

      <div>{children}</div>
    </div>
  );
}

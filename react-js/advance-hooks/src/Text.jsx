import { memo } from "react";

function Text({ text, inc2 }) {
  return <div>Text : {text}</div>;
}

export default memo(Text);
// HOC

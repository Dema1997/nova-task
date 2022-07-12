import * as React from "react";

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message }) => (
  <p style={{ marginTop: 80, maxWidth: 500 }}>{message || "Loading.."}</p>
);

export { Loading };

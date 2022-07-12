import * as React from "react";

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message }) => (
  <p style={{ marginTop: 80, fontWeight: "bold" }}>{message || "Loading.."}</p>
);

export { Loading };

import * as React from "react";
import { Loading } from "./Loading";

interface WithLoadingComponentProps {
  isLoading: boolean;
  message?: string;
}

const WithLoading = (
  Component: JSX.Element,
  CustomLoadingMessage?: React.ComponentType
): React.FC<WithLoadingComponentProps> => {
  const WithLoadingComponent: React.FC<WithLoadingComponentProps> = ({
    isLoading,
    message,
  }) => {
    const LoadingMessage = CustomLoadingMessage || Loading;

    if (isLoading) return <LoadingMessage message={message} />;

    return Component;
  };

  return WithLoadingComponent;
};

export { WithLoading };

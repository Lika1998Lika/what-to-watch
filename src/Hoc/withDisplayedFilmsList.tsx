import { ComponentType } from "react";

type WithExtraProps<P> = P & { extraProp: string };

export const WithDisplayedFilmsList = <P extends object>(Component: ComponentType<P>): React.FC<WithExtraProps<P>> => {
  return (props: WithExtraProps<P>) => {
    return <Component {...props} />
  }
};


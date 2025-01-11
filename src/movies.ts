import { AuthorizationStatus } from "./const";

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean => {
  return authorizationStatus === AuthorizationStatus.Unknown
};
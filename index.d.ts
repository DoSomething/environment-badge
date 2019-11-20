export interface EnvironmentConfiguration {
  displayName: string;
  host: RegExp;
  backgroundColor?: string;
  foregroundColor?: string;
}

declare function environmentBadge (environments?: EnvironmentConfiguration[]): void;

export default environmentBadge;

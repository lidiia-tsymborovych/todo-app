export enum FilterParams {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}

export type FilterValue = `${FilterParams}`;

export enum LoadingState {
  IDLE,
  PENDING,
  SUCCESS,
  FAILED,
}

export type TLoadingState = {
  loadingState: LoadingState;
};

interface GeneralAccountSettingsState {
  error: boolean;
  errorMessage: string;
  user: null;
  loadingUser: boolean;
  updatedUserSuccess: boolean;
}

interface UpdateUserResponse {
  data: any;
  status: number;
}

export { GeneralAccountSettingsState, UpdateUserResponse };

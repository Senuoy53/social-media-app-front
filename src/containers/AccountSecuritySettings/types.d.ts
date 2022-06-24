interface AccountSecuritySettingsState {
  error: boolean;
  errorMessage: string;
  renewPasswordSuccess: boolean;
}

interface RenewPasswordResponse {
  data: any;
  status: number;
}

export { AccountSecuritySettingsState, RenewPasswordResponse };

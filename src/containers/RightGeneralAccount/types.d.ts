interface RightGeneralAccountProps {
  RightTitle: string;
  currentUser: any;
  gender: string;
  selectedDate: any;
  loadingUser: boolean;
  updatedUserSuccess: boolean;
  errorMessage: stringt;
  ButtonField: string;
  onSubmit: (e: any) => void;
  handleGenderChange: (e: any) => void;
  handleDateChange: (e: any) => void;
}

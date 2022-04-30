interface User {
  id: string;
  fname: string;
  lname: string;
  email: string;
  password: string;
  verifed: boolean;
}

interface GlobalState {
  signInState: SigninState;
}

export { User, GlobalState };

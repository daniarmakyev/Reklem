export interface UserType {
    name: string;
    email: string;
    password: string;
    id?: number;
  }

  export type StateType = {
    currentUser?: null;
     users: UserType[];
     loading: boolean;
   };
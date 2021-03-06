// export interface UserLogin {
//   name: string;
//   email: string;
//   password: string;
// }

export interface UserData {
  user: User;
}

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date
}
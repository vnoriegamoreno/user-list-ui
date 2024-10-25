export interface User {
  id: string;
  name: string;
  age: string;
  city: string;
  friends: User[];
}

export interface UserList {
  userList: User[];
}

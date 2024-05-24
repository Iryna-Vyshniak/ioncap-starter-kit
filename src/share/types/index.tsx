type User = {
  picture: {
    thumbnail: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  nat: string;
};

export type UserListProps = {
  users: User[];
};

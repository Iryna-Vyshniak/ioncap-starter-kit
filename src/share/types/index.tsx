export type User = {
  picture: {
    thumbnail: string;
    large: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  nat: string;
  dob: {
    age: number;
    date: string;
  };
  gender: string;
  location: {
    city: string;
    street: { number: number; name: string };
    country: string;
    state: string;
  };
  phone: string;
};

export type UserListProps = {
  users: User[];
  presentingElement: HTMLElement | null;
};

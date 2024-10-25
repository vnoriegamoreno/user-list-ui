import React, { useState } from 'react';
import { User } from 'types/userTypes';
import userData from 'mock/user-list.mock.json';

type UsersFounded = User[] | User | [];

const Searchbox = () => {
  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e?.target?.value || '';
    setInputValue(value);
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const usersFounded: UsersFounded =
      userData.find((u) => u.name.match(inputValue)) || [];
    console.log({ inputValue, usersFounded });
  };

  return (
    <form
      className="SearchboxForm"
      data-testid="SearchboxForm"
      onSubmit={onSubmitHandler}
    >
      <input
        className="SearchboxInputField"
        onChange={onChangeHandler}
        placeholder="Users"
        type="text"
      />
      <button className="SearchboxButton">Search</button>
    </form>
  );
};

export default Searchbox;

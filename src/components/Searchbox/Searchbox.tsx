import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from 'types/userTypes';
import { setUserListFilter } from 'store/slices/userSlice';

type FilteredUser = User[] | [];

const Searchbox = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userList = useSelector((state: any) => state.userSlice.userList);
  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e?.target?.value || '';
    setInputValue(value);
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const filteredUser: FilteredUser = userList.filter((user: User) =>
      user.name.match(inputValue)
    );
    dispatch(setUserListFilter(inputValue === '' ? userList : filteredUser));
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
        placeholder="Search user"
        type="text"
      />
      <button className="SearchboxButton">Search</button>
    </form>
  );
};

export default Searchbox;

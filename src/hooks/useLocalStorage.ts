import { SentimentSatisfiedAltOutlined } from '@material-ui/icons';
import { useState } from 'react';
import { User } from '../models/User';

export function useLocalStorage(key: string, initialState: User) {
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialState;
    } catch(error) {
      console.warn(error);
      return initialState;
    }
  });

  const setValue = (value: User) => {
    try {
      const valueToStore =
        value instanceof Function ? value(state) : value;

      setState(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [state, setValue];

}
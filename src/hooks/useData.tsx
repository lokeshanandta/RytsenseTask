import React, { useContext, useState} from 'react';
import {
  IUseData,
} from '../constants/types';

export const DataContext = React.createContext({});

export const DataProvider = ({children}: {children: React.ReactNode}) => {
  const [events,setEvents]=useState<string[]>([])
  const [dates, setDates] = useState<string[]>([])
 
  const contextValue = {
    events,
    setEvents,
    dates, 
    setDates
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext) as IUseData;

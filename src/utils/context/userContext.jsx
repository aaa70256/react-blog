import React, { createContext, useState } from 'react';

// 1. 創建一個 Context 對象
const MyContext = createContext();

// 2. 創建一個 Provider 組件
export function UserProvider({ children }) {
  const [value, setValue] = useState([]);

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}

// 3. 導出 Context 和 Provider
export default MyContext;
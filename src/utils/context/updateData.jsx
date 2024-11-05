import React, { createContext, useState } from 'react';

// 1. 創建一個 Context 對象
const UpdateContext = createContext();

// 2. 創建一個 Provider 組件
export function UpdateProvider({ children }) {
  const [UPData, setUPData] = useState(false);

  return (
    <UpdateContext.Provider value={{ UPData, setUPData }}>
      {children}
    </UpdateContext.Provider>
  );
}

// 3. 導出 Context 和 Provider
export default UpdateContext;
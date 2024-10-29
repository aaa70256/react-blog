export const getItem = (data)=>{
  return localStorage.getItem(data);
}

export const setItem = (key,item)=>{
  const data = JSON.stringify(item);
  localStorage.setItem(key,data);
}

export const removeItem = (data)=>{
  localStorage.removeItem(data);
}
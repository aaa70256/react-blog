import dayjs from 'dayjs'

export const dayFormat = (data, format) => {
  return dayjs(data).format(format);
}

//陣列由時間由新到舊排序
export const newDaySort = (data) => {
  return data.sort((a, b) => {
    return new Date(b.posttime) - new Date(a.posttime);
  });
}

//陣列由時間由舊到新排序
export const oldDaySort = (data) => {
  return data.sort((a, b) => {
    return new Date(a.posttime) - new Date(b.posttime);
  });
}
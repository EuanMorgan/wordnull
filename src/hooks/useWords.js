import {getAllwords} from '../util/api';

export const useWords = async () => {
  let allWords = await getAllwords();
  let fiveWords = allWords.filter(word => word.length === 5);

  return fiveWords;
};

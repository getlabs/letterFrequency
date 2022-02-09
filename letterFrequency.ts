export const letterFrequency = (entry: string) => {
  let result: { [key: string]: number } = {};

  if (!entry) return;
  let total: number = 0;
  for (let i = 0; i < entry.length; i++) {
    result[entry[i]] = result[entry[i]] ? result[entry[i]] + 1 : 1;
    total++;
  }

  for (let key in result) {
    result[key] = result[key] / total;
  }
  return result;
};

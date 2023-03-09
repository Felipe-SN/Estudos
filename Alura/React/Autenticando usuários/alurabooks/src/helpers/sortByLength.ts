const sortByLength = <T, P extends keyof T>(array: T[], prop: P) => {
  return array.sort((a, b) => {
    const lengthA = (a[prop] as string | []).length;
    const lengthB = (b[prop] as string | []).length;

    if (lengthA < lengthB) return -1;
    if (lengthA > lengthB) return 1;
    return 0;
  });
};

export default sortByLength;

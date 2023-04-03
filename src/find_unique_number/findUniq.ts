/* There is an array with some numbers. All numbers are equal except for one. Try to find it!
 * Example : findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
 */

export const findUniq = (arr: number[]): number => {
  return arr.find(
    (item: number) => arr.indexOf(item, arr.indexOf(item) + 1) === -1
  );
};

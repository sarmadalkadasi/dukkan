
export const arraysAreEqual = (arr1: number[], arr2: number[])=> {
    if (arr1.length !== arr2.length) return false;

    return arr1.every((value, index) => value === arr2[index]);
}

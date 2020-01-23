export const calcTotal = (num) => {
  if (num <= 10) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
      total += i;
    }
    const communityWeight = total * 10;
    return communityWeight;
  } else {
    const fullGrownFrogs = num - 10;
    const communityWeight = (fullGrownFrogs * 100) + 550;
    return communityWeight;
  }
}

export default calcTotal;
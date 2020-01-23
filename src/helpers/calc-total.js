export const calcTotal = (numberOfDays) => {
  let communityWeight;
  if (numberOfDays <= 10) {
    let total = 0;
    for (let i = 1; i <= numberOfDays; i++) {
      total += i;
    }
    communityWeight = total * 10;
  } else {
    const fullGrownFrogs = numberOfDays - 10;
    communityWeight = (fullGrownFrogs * 100) + 550;
  }
  return communityWeight;
}

export default calcTotal;
export function getMinMaxDateItem(array) {
  if (array.length === 0) {
    return null;
  }

  return array.reduce((result, currentItem) => {
    const currentDate = currentItem.date;

    if (!result.minDate || currentDate < result.minDate) {
      result.minDate = currentDate;
      result.minDateItem = currentItem;
    }

    if (!result.maxDate || currentDate > result.maxDate) {
      result.maxDate = currentDate;
      result.maxDateItem = currentItem;
    }

    return result;
  }, {});
}

export function sortFn(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

var app = {
  findIndex: function (arr, predicate) {
    for (var i = 0; i < arr.length; i++) {
      if (predicate(arr[i])) {
        return i;
      }
    }

    return -1;
  },
  filter: function (arr, predicate) {
    const newArr = [];

    for (var i = 0; i < arr.length; i++) {
      if (predicate(arr[i])) {
        newArr.push(arr[i]);
      }
    }

    return newArr;
  }
};

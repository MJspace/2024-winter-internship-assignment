function isEmpty(value) {
  if (value === null || value === undefined) {
    return true;
  }
  if (value === "") {
    return true;
  }
  if (value.constructor === Array) {
    if (value.length === 0) {
      return true;
    }
    return value.every(isEmpty);
  }
  if (value.constructor === Object) {
    if (Object.keys(value).length === 0) {
      return true;
    }
    return Object.keys(value).every((key) => isEmpty(value[key]));
  }
  return false;
}

isEmpty(null); // 출력: true
isEmpty({}); // 출력: true
isEmpty(0); // 출력: false
isEmpty(false); // 출력: false
isEmpty([{}, { a: [] }]); // 출력: true
isEmpty({ a: null, b: "" }); // 출력: true

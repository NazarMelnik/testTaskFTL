export default function countUsers(obj) {
  let result = 0;
  for (let key in obj) {
    result += obj[key];
  }
  return result;
}

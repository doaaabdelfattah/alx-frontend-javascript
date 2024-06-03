export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const newArray = array.map((item) => item.id);
  return newArray;
}

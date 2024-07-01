export default function getStudentIdsSum(array) {
  return array.reduce((accum, current) => (typeof accum === 'number' ? accum : accum.id) + current.id);
}

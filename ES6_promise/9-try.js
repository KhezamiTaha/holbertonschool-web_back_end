export default function guardrail(mathFunction) {
  const result = [];
  try {
    const value = mathFunction();
    result.push(value);
  } catch (error) {
    result.push(error.toString());
  } finally {
    result.push('Guardrail was processed');
  }
  return result;
}

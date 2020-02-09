export const tickPosition = (index) => {
  return {type : 'TICKPOSITION', index}
}

export const reset = () => {
  return {type : 'RESET'}
}
  function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndCustomer = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndCustomer.push(`${i + 1}. ${line[i]}`)
  }

  /* Keep in mind, join() is a a shorthand for looping and building
   * into a String. */
  return `The line is currently: ${numbersAndCustomer.join(', ')}`
};

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
};

function takeANumber(line, Customer) {
  line.push(name)

  return `Welcome, ${Customer}. You are number ${line.length} in line.`
};
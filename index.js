  function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndCustomers = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndCustomers.push(`${i + 1}. ${line[i]}`)
  }

  /* Keep in mind, join() is a a shorthand for looping and building
   * into a String. */
  return `The line is currently: ${numbersAndNames.join(', ')}`
};

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
};

function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
};
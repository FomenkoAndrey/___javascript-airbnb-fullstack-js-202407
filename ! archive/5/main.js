const myError = new Error('My custom error happened')

function func() {
  try {
    if (Math.random() > 0.5) throw myError
    console.log('Block "try" works')
    return 'Block "try" return something'
  } catch (err) {
    console.log('Block CATCH:', err.message)
  } finally {
    console.log('Block "finally" works')
  }

  console.log('Block at the end of the function')

  return 'Error happened'
}

console.log(func())

console.log('End of the script')

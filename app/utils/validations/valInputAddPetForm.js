const clearErros = () => {
  setErrorBreed('')
  setErrorName('')
  setErrorAge('')
  setErrorWeight('')
}

export const validateData = (erro1, error2, error3, error4) => {
  clearErros()
  let isValid = true
  if (formData.breed == '') {
    setErrorBreed('Raza es requerida')
    isValid = false
  }
  if (formData.name == '') {
    setErrorName('El nombre es requerida')
    isValid = false
  }
  if (formData.age == '') {
    setErrorAge('la edad es requerida')
    isValid = false
  }
  if (formData.weight == '') {
    setErrorWeight('El peso es requerida')
    isValid = false
  }
  return isValid
}

export const addDocument = async (collection, data, db) => {
  const result = {statusResponse: true, error: null}
  try {
    await db.collection(collection).add(data)
  } catch (error) {
    result.statusResponse = false
    result.errror = error
  }
  return result
}

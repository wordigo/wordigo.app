export const decodeToken = async (value: string) => {
  try {
    const token = JSON.parse(
      decodeURIComponent(
        value
      )
    )
    [0]
    return token
  } catch {
    return false
  }
}
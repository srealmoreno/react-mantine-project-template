export function validateEmail (email: string): boolean {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return emailRegex.test(email)
}

export function validateName (name: string): boolean {
  const nameRegex = /^[a-zA-ZÁ-ÿ]{2,40}(\s[a-zA-ZÁ-ÿ]{2,40})+$/
  return nameRegex.test(name)
}

export function validateUsername (username: string): boolean {
  const usernameRegex = /^[a-zA-Z0-9]{2,40}$/
  return usernameRegex.test(username)
}

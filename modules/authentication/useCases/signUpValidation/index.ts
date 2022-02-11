export const isValidEmail = (email: string): boolean => {
    return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email)
}

export const isValidPassword = (password: string): boolean => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/s.test(password)
}

export const isValidName = (name: string): boolean => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{1,}$/s.test(name)
}
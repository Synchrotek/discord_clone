const validatePassword = (password) => {
    return password.length >= 6 && password.length <= 12
}
const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

export const validateLoginForm = ({ email, password }) => {
    const isMailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    return isMailValid && isPasswordValid;
}
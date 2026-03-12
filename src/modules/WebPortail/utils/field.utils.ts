/**
 * Check email format
 * @param data 
 * @returns 
 */
function isValidEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]{2,}[.][a-z]{2,3}$/;
    return regex.test(email);
}

/**
 * Check if all fields are filled
 * @param data 
 * @returns 
 */
function areFieldsFilled(data: Record<string, string>): boolean {
    return Object.values(data).every(value => value.trim() !== '');
}

export { isValidEmail, areFieldsFilled }
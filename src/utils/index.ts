export const sliceEmail = (email: string | null) => {
    if (!email) return ''
    return email.charAt(0).toUpperCase() + email.split('@')[0].slice(1) 
}
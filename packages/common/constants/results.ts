export const successResult = <T>(data: T | null, message: string) => {
    return {
        success: true,
        data,
        message
    }
}

export const errorResult = <T>(data: T | null, message: string) => {
    return {
        success: false,
        data,
        message
    }
}
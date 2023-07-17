export const successResult = (data: object | string | number | boolean | null = null, message: string) => {
    return {
        success: true,
        data,
        message
    }
}

export const errorResult = (data: object | string | number | boolean | null = null, message: string) => {
    return {
        success: false,
        data,
        message
    }
}
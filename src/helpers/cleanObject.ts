// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cleanObject (data: Record<string, any>) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cleared: Record<string, any> = {}

    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            const element = data[key];
            if (element !== null || element !== undefined) {
                cleared[key] = element
            }
        }
    }

    return cleared
}
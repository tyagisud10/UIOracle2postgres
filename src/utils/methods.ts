export const phoneFormater = (val: string) => {
    if (val) {
        if (val.length == 10) return `(${val.slice(0, 3)}) ${val.slice(3, 6)}-${val.slice(6)}`
        else return val
    } else return val
}
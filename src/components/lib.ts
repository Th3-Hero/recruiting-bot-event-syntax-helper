
export const isValidClanTag = (tag: string): boolean => {
    const regex = /^[A-Za-z0-9_-]{2,5}$/;
    return regex.test(tag);
}

export const isValidPlayerName = (name: string): boolean => {
    const regex = /^[A-Za-z0-9_-]{3,24}$/;
    return regex.test(name);
}

export const isValidBrackets = (string: string): boolean => {
    const stack = [];
    for (let char of string) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
};

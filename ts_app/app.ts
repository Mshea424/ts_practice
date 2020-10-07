let userInput: unknown;
let userName: string;

userInput = 5

userInput = 'mike'

if (typeof userInput === 'string') {
    userName = userInput
}

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code }
}

generateError('An error occured!', 500)

// const result = generateError('An error occured!', 500)
// console.log(result)
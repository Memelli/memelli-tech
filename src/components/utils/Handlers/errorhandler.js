export const ErrorHandler = (status) => {
    const string = status.toString()
    const array = string.split(" ")
    if(array[9] == '401') {
        return 'Erro de autenticação. Verifique a sua API Key'
    } else {
        return `Erro status ${array}`
    }
}
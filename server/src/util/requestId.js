
const requestId = (idLen = 6) =>{
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    let newStr = "";

    for(let i=0;i<idLen;i++) {
        newStr += str[Math.floor(Math.random() * str.length)];
    }

    return newStr
}

export { requestId };
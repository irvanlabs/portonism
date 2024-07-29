import { customAlphabet } from "nanoid";

const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';


export const generateCname = (length: number = 17) =>{
    const nanoid = customAlphabet(alphabet, length);
    return nanoid()
}
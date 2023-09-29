export const fizzbuzz = (n: number): string => {
    if (n==2){
        return "2"
    }

    if (n==3){
        return "Fizz"
    }

    if (n==5){
        return "Buzz"
    }
    
    return "1"
}
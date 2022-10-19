type PlayerO = {
    readonly name:Name,
    age?:Age
}

const playerMake = (name:string) : PlayerO => ({name});
const choName = playerMake("cho");
choName.age = 25;

const nums: readonly string[] = ["1", "2"];


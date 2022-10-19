type Age = number; // 타입 지정 가능
type Name = string;
type Player = {
    name: Name,
    age?: Age
} // 한 타입에 대해 지정해주고 지정한 값은 변수나 함수에 지정 가능

const player_cho : Player = {
    name: "cho"
}

const player_shin : Player = {
    name: "shin"
}

// 아래 함수 같은 경우처럼 쓰는 경우가 있고
function playerMaker(name:string) : Player {
    return {
        name:name,

    }
}
const cho = playerMaker("cho");

// 함수처럼 쓰기 싫으면 const로 변수 지정해서 playerMakers처럼 쓰는 경우도 있다
const playerMakers = (name:string) => ({name}); 
const shin = playerMakers("shin");

cho.age = 25;
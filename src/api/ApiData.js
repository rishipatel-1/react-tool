import Chance from "chance"

const chance = new Chance();

export const fakeuserData = ()=>{
    console.log(chance.name({middle:true}));
    return chance.name({middle:true})
}


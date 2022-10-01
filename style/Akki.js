let team = [
    {
        name:"Aakash",
        position:"Developer"
    },
{
    name:"Raj",
    position:"Backend Engineer"

},
{
    name:"Harry",
    position:"Frontend engineer"
}
];

let team2 = team.filter(val=>val.position="developer");

console.log(team2);
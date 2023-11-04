//A hero is on his way to the castle to complete his mission.However, he is been told that the castle is surrounded with a couple of powerful dragons
//Each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.Assuming he is gonna grab a specific given number of bullets
//and move foward to fight another specific given number of dragons,will he survive

function hero(bullets, dragons) {
    return bullets / dragons >= 2;
}
console.log(hero(10, 5));
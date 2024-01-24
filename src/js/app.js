// TODO: write your code here
import sum from './basic';


function power(object) {
    if (object.health > 50) {
        return 'healthy';            
    } else if (object.health >= 15) {
        return 'wounded';
    } else {
        return 'critical';
    }
}


function sorting(mass) {
    mass.sort((a, b) => {
        return b.health - a.health;
    })
    return mass
}


export { sorting, power }


console.log('worked');

console.log(sum([1, 2]));
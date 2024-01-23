// TODO: write your code here
import sum from './basic';


export default function power(object) {
    if (object.health > 50) {
        return 'healthy';            
    } else if (object.health >= 15) {
        return 'wounded';
    } else {
        return 'critical';
    }
}


console.log('worked');

console.log(sum([1, 2]));

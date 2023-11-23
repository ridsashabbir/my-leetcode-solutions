/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    const min = Math.min(...salary);
    const max = Math.max(...salary);
    let sum = 0;
    
    for(let i = 0 ; i< salary.length; i++){
        sum += salary[i]; 
    }
    const totalSum = (sum)- (min+max) ;
    const avgSalary = totalSum / (salary.length -2);
    return avgSalary;
};
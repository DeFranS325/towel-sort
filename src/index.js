
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let str = [];
    if (arguments.length == 0)
        return [];
    else {
        if (matrix == [])
            return 'Should return empty array if matrix is empty';
        else
            for (let i = 0; i < matrix.length; i++) {
                let s = [];
                if (i % 2 == 0)
                    s = matrix[i];
                else
                    s = matrix[i].reverse();
                for (let j = 0; j < s.length; j++)
                    str.push(s[j]);
            }
        return str;
    }    
}

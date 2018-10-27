(function () {
    function timeSwitch(num) {
        let string = `switch(n) {`;
        for (let i = 0; i < num - 1; i++) {
            string += `case ${i}:;break;`;
        }
        string += `default: ;}`;
        return string
    }

    function timeIf(num) {
        let string = `if (n===0) {}`;
        for (let i = 1; i < num - 1; i++) {
            string += `else if(n==${i}){}`;
        }
        string += `else {}`;
        return string
    }

    function calculate(funct, num, log) {
        var scriptFunc = funct(num);
        console.time(log);
        for (var n = 0; n < num; n++) {
            eval(scriptFunc)
        }
        console.timeEnd(log)
    }

    function callFunc(numBlock) {
        calculate(timeSwitch, numBlock, 'Time switch: ');
        calculate(timeIf, numBlock, 'if else statement: ');
    }

    callFunc(300);
})();
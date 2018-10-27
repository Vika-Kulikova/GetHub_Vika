(function () {
    let elements = [];
    let string = prompt('Enter your string:', '');

    function chackString(str) {
        for (let i = 0; i < str.length; i++) {
            const strElement = str[i];
            if (strElement == "(" || strElement == "{" || strElement == "[") {
                elements.push(strElement);
            } else if (strElement == ")") {
                if (elements.pop() != "(") {
                    return false;
                }
            } else if (strElement == "}") {
                if (elements.pop() != "{") {
                    return false;
                }
            } else if (strElement == "]") {
                if (elements.pop() != "[") {
                    return false;
                }
            } else if (strElement == "'") {
                if (elements.length && elements.indexOf("'") == elements.length - 1) {
                    elements.pop();
                } else {
                    elements.push("'")
                }
            } else if (strElement == "\"") {
                if (elements.length && elements.indexOf("\"") == elements.length - 1) {
                    elements.pop();
                } else {
                    elements.push("\"")
                }
            } else if (strElement == "`") {
                if (elements.length && elements.indexOf("`") == elements.length - 1) {
                    elements.pop();
                } else {
                    elements.push("`")
                }
            }
        }
        return !elements.length;
    }

    function massege(str, array) {
        if (str) {
            console.log('Your string is valid');
        } else {
            console.log('Your string is invalid. You missed: ' + array[0]);
        }
    }

    let result = chackString(string);
    massege(result, elements);

}());






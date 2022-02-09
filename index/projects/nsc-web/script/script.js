numberSystemConverter();
function numberSystemConverter() {
    num = parseInt(document.getElementById('number').value);
    base = parseInt(document.getElementById('base').value)
    try {
        new_num = num.toString(base)
        document.getElementById('converted').value = new_num
        console.log(`BASE 10:${num} ==> BASE ${base}: ${new_num}`);
    } catch (RangeError) {
        console.log(`Base is not in the range of 2 to 36.`);
    }
};
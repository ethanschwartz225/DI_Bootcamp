
function isAnagram(inputA, inputB) {
    let inputAArray = inputA.split("").sort().join("");
    let inputBArray = inputB.split("").sort().join("");

    console.log(inputAArray === inputBArray);
}

isAnagram("oryan", "aronq")

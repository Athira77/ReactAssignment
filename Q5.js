//que a
let add = (a = 13, b = 7) => {
    console.log(`a: ${a} b: ${b} addition is: ${a+b}`);
  };
  
  add();
  add(10);

  // que b
  let userWithFriends = (userName, ...userFriends) => {
    console.log(`{userName: "${userName}", list of Friends is: "${userFriends}"}`);
}

userWithFriends('Divya','Athira','Kanuka','Shilpi','Vidya');
userWithFriends('Athira','Kanuka','Shilpi','Vidya');
// que c
let printCapitalNames = (...names) => {
    const result= [];
    names.forEach((element) => {
        result.push(element.toUpperCase());
    });
    console.log(`Names in Upper Case: "${result }"`);
}

let namesList = ['Arjun','Shreyas','Anju','Ananya'];
console.log(namesList);
printCapitalNames(...namesList);
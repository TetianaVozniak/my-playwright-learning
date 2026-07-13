// === Помилка 1 ===
function getTimeout(seconds: number): number {
  return seconds * 1000;
}

console.log(getTimeout(5)); 


// === Помилка 2 ===
const config = { baseURL: "https://staging.example.com" };
console.log(config.baseURL);


// === Помилка 3 ===
function printName(name: string) {
  console.log(name);
}
const userName: string | undefined = undefined;
const realName: string = "Tetiana";
printName(realName); 
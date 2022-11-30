//scope - доступність змінних в нашому коді (scope, область видимості, лексичне окруженіє)

function funcA() {
  let a = 1;
  function funcB() {
    let b = 2;
    function funcC() {
      let c = 3;
      console.log("funcC", a, b, c);
    }
    funcC();
    console.log("funcB", a, b);
  }
  funcB();
  console.log("funcA", a);
}

funcA();

// лексичне окружєніє це спец внутрішній обєкт, який містить назви змінних та їх значення і також ссилку на внєшнє лексичне окруженіє.

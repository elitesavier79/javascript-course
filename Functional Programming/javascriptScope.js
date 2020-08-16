//Global Scope => variable/funcion nya yang dapat diakses oleh code yg di buat baik di luar atau di dalam function

const varGlobal = "ini contoh global scope";

alert (varGlobal);




//local/function Scope =>variable/function nya yang hanya dapat di akses oleh code di dalam function saja
const localScope = function () {
  const localVar = "ini contoh lokal scope";
  alert(localVar);
};

localScope();
 

 

function Convertir(e){
  let num = parseInt(e.target.value)
  console.log(num);
  console.log(typeof num);
  let spans = document.querySelectorAll('span');
  for(let s of spans){
    s.textContet = num.toString(parseInt(s.dataset.base)).toUpperCase();
  }
}

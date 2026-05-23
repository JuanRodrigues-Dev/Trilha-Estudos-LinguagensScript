const url = document.getElementById("url")
const btn_url = document.getElementById("btn_url")

btn_url.addEventListener("click",(evt)=>{
   // window.location=""
   // window.location.replace=("") Deleta a URL 
   // window.location.assign=("") NAO Deleta a url
   // window.location.reload() Recarrega a Pagina
   // window.location.back () volta a pagina
   // window.location.forward() passa a pagina 
   // window.history.length ver o tamnha do fistorico 
   // window.history.go(2) navegar para frente ou tras
    window.location = url.value


})
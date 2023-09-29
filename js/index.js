const walletID = document.getElementsByClassName("text-connect");

document.addEventListener("DOMContentLoaded",()=> {
//   let isFirstConnect = localStorage.getItem("isFirstConnect")
//   if(isFirstConnect){
//     ethereum
//     .request({ method: "eth_requestAccounts" })
//     .then((accounts) => {
//       const account = accounts[0];
//       let address = account.slice(0,6)+"..."+account.slice(account.length-5,account.length-1)
//       walletID[0].innerText = address;
//     })
//   }
   start()
        // clearTimeout(timeout);
})
var timeout = null; // Timeout


var listTime = [
    {
        id:"time-1",
        h:"48",
        m:"00",
        s:"00",
    },
  ]

function start()
{
    console.log("vào");
    listTime.forEach(e => {
     
        /*BƯỚC 1: CHUYỂN ĐỔI DỮ LIỆU*/
        // Nếu số giây = -1 tức là đã chạy ngược hết số giây, lúc này:
        //  - giảm số phút xuống 1 đơn vị
        //  - thiết lập số giây lại 59
        if (e.s === -1){
            e.m -= 1;
            e.s = 59;
        }
     
        // Nếu số phút = -1 tức là đã chạy ngược hết số phút, lúc này:
        //  - giảm số giờ xuống 1 đơn vị
        //  - thiết lập số phút lại 59
        if (e.m === -1){
            e.h -= 1;
            e.m = 59;
        }
     
        // Nếu số giờ = -1 tức là đã hết giờ, lúc này:
        //  - Dừng chương trình
        if (e.h == -1){
            
            document.getElementById(e.id).innerText='Time out';
            return false;
        }
     
        /*BƯỚC 1: HIỂN THỊ ĐỒNG HỒ*/

        let hour = e.h.toString().length===1?"0"+e.h.toString():e.h.toString()
        let min = e.m.toString().length===1?"0"+e.m.toString():e.m.toString()
        let sec = e.s.toString().length===1?"0"+e.s.toString():e.s.toString()

        document.getElementById(e.id).innerText = hour+":"+min+":"+sec;
     
        /*BƯỚC 1: GIẢM PHÚT XUỐNG 1 GIÂY VÀ GỌI LẠI SAU 1 GIÂY */
        
    });
    if(listTime[0].h==-1){
        console.log("clear");
        clearTimeout(timeout);
    }
    timeout = setTimeout(function(){
        listTime.forEach(e => {
            e.s--
        })
        start();
    }, 1000);
    /*BƯỚC 1: LẤY GIÁ TRỊ BAN ĐẦU*/
}









const walletID = document.getElementsByClassName("text-connect");

function connect () {
    if (typeof window.ethereum !== "undefined") {
      ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          const account = accounts[0];
          let address = account.slice(0,6)+"..."+account.slice(account.length-5,account.length-1)
          localStorage.setItem("isFirstConnect",true)
          document.getElementsByClassName("table-main")[0].style.display="block"
          document.getElementsByClassName("table-main")[0].style.display="block"
          walletID[0].innerText = address;
        })
        .catch((error) => {
          console.log(error, error.code);
        });
    } else {
        window.open("https://metamask.io/download/", "_blank");
    }
}


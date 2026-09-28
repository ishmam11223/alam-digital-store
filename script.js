let cart=0;
document.querySelectorAll(".add").forEach(b=>b.onclick=()=>{cart++;document.getElementById("cartCount").textContent=cart;alert(b.closest(".card").dataset.product+" added to cart")});
document.querySelectorAll(".view").forEach(b=>b.onclick=()=>{let c=b.closest(".card");alert(c.dataset.product+" — ৳"+c.dataset.price)});
document.getElementById("cartBtn").onclick=()=>alert("Cart contains "+cart+" item(s).");
document.getElementById("contactForm").onsubmit=e=>{e.preventDefault();alert("Message submitted (demo only).");e.target.reset()};

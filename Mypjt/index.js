const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});
function addToCart(){
    var product={
        name:"Green Salad",
        price:100
    };
    var cart =JSON.parse(localStorage.getItem('cart'))||[]
    cart.push(product);
    localStorage.setItem('cart',JSON.stringify(cart));
    alert('Your Item added to the Cart!');
}
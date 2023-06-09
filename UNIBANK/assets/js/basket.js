function GetProducts() {
  console.log('card_basket:', document.querySelector('.card_basket'));
  let items = JSON.parse(localStorage.getItem('cards'));

  let x = '';
  items.forEach(item => {
      // let short_text = item.Title.length > 5 ? item.Title.slice(0, 5) + "..." : item.Title
      x += `
      <div class="container_lg">
      <div class="content-shop my-4">
        <div class="content d-flex justify-content-between  align-items-center ">
          <div class="image">
              <img src="${item.Image}" alt="" />
          </div>
          <div class="text d-inline-block">
            <h3>Products</h3>
            <h4>${item.Name}</h4>
          </div>
          <div class="plus-minus">
              <span class="plus">+</span>
              <span class="digit">${item.Count}</span>
              <span class="minus">-</span>
          </div>
          <div class="pricee">
              $
          </div>
          <div class="delete">
      <button class="btn btn-delete btn-danger">Delete</button>
    </div>
        </div>
      </div>
    </div>
      `
  })
  let card_basket = document.querySelector('.card_basket');
  card_basket.innerHTML = x;
  ShowCount()
}
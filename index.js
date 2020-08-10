$(function() {
  $('#js-shopping-list-form').submit( event => {
    event.preventDefault();

    console.log($(this))

    const listItem = $(this).find('input[name="shopping-list-entry"]').val();

    $('ul.shopping-list').append(`<li><span class="shopping-item">${listItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
  })

  $('ul.shopping-list').on('click','button.shopping-item-toggle', event => {
    $(event.target).closest('li').find('span.shopping-item').toggleClass('shopping-item__checked');
  })

  $('ul.shopping-list').on('click','button.shopping-item-delete', event => {
    $(event.target).closest('li').remove()
  })

})
$('.search-box').hover( function(){
	$(this).width('250px')
    $(this).find('input').show()
    $(this).find('button[type="submit"]').width('12.8%')
}, function(){
	$(this).removeAttr('style')
    $(this).find('input').removeAttr('style')
    $(this).find('button[type="submit"]').removeAttr('style')
})
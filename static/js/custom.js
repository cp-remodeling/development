$( document ).ready(function() {
    switchContentWithNavClick();
});

function switchContentWithNavClick() {
    $('.service').click(function() {
        $('.fh5co-tabs li a').last().trigger('click')
    });
    $('.abouts').click(function() {
        $('.fh5co-tabs li a').first().trigger('click')
    });
}

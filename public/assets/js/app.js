(function(){

	$('#tabadmin  a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

        $(".btn-admin").click(function() {
            $(".aside-admin").slideToggle("slow");
        });



}());


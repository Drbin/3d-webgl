    $(".keyboard a").click(function () {
        let str="media/"+$(this).attr("rel")+".mp3";
        $("#hide").html("<audio src='"+str+"' autoplay controls='controls'></audio>");
        $(this).addClass("as");
        let _this=$(this);
        setTimeout(function () {
            _this.removeClass("as")
        },500)
    })

function keyLogin(event) {
      if (event.keyCode == 65) {
          $("a[rel='1']").click()
      }else  if (event.keyCode == 83) {
          $("a[rel='2']").click()
      }else  if (event.keyCode == 68) {
          $("a[rel='3']").click()
      }else  if (event.keyCode == 70) {
          $("a[rel='4']").click()
      }else  if (event.keyCode == 71) {
          $("a[rel='5']").click()
      }else  if (event.keyCode == 72) {
          $("a[rel='6']").click()
      }else  if (event.keyCode == 74) {
          $("a[rel='7']").click()
      }else  if (event.keyCode == 75) {
          $("a[rel='8']").click()
      }else  if (event.keyCode == 76) {
          $("a[rel='9']").click()
      }

}
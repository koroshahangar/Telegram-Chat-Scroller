
document.addEventListener('DOMContentLoaded', function () {

  var scrollUpBtn = document.getElementById("btn-scroll-up");
  var scrollDownBtn = document.getElementById("btn-scroll-down");
  var stopScrollingBtn = document.getElementById("btn-stop-scrolling");

  scrollUpBtn.addEventListener("click", function(){
    scrollUpBtn.setAttribute("state", "active");
    scrollDownBtn.setAttribute("state", "deactive");
    stopScrollingBtn.setAttribute("state", "deactive");
    // chrome.runtime.sendMessage(
    //   {
    //     from: "telegramscroller",
    //     command: "tg_scroll_up"
    //   });


      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          from: "telegramscroller",
          command: "tg_scroll_up"
        }, function(response) {
          console.log("response.farewell");
        });
      });


  });

  scrollDownBtn.addEventListener("click", function(){
    scrollDownBtn.setAttribute("state", "active");
    scrollUpBtn.setAttribute("state", "deactive");
    stopScrollingBtn.setAttribute("state", "deactive");
    // chrome.runtime.sendMessage(
    //   {
    //     from: "telegramscroller",
    //     command: "tg_scroll_down"
    //   });


    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        from: "telegramscroller",
        command: "tg_scroll_down"
      }, function(response) {
        console.log("response.farewell");
      });
    });



  });


  stopScrollingBtn.addEventListener("click", function(){
    stopScrollingBtn.setAttribute("state", "active");
    scrollUpBtn.setAttribute("state", "deactive");
    scrollDownBtn.setAttribute("state", "deactive");
    // chrome.runtime.sendMessage(
    //   {
    //     from: "telegramscroller",
    //     command: "tg_scroll_stop"
    //   });

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        from: "telegramscroller",
        command: "tg_scroll_stop"
      }, function(response) {
        console.log("response.farewell");
      });
    });

  });
});

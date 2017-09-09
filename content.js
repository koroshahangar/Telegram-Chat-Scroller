

chrome.runtime.sendMessage(
  {
    from: "telegramscroller",
    command: "show_tg_scroll_action"
  });

var chatSection = document.getElementsByClassName("im_history_scrollable_wrap")[0];
var loader_up = document.getElementsByClassName("im_history_loading_more")[0];
var loader_down = document.getElementsByClassName("im_history_loading_less")[0];
var scrolling_interval;

chrome.runtime.onMessage.addListener(
  function(msg, sender, response) {
    if(msg.from == "telegramscroller" && msg.command == "tg_scroll_up")
    {
      scrolling_interval = setInterval(function(){
        if ( !loader_up.classList.contains("im_history_loading_more_active") )
        { chatSection.scrollTop -= 3000; }
      }, 100);
      console.log("Telegram Scroller: Scrolling Up")
    }
    else if(msg.from == "telegramscroller" && msg.command == "tg_scroll_down")
    {
      scrolling_interval = setInterval(function(){
        if ( !loader_up.classList.contains("im_history_loading_less_active") )
        { chatSection.scrollTop += 3000; }
      }, 100);
      console.log("Telegram Scroller: Scrolling Down")
    }
    else if(msg.from == "telegramscroller" && msg.command == "tg_scroll_stop")
    {
      clearInterval(scrolling_interval);
      console.log("Telegram Scroller: Scrolling Stopped");
    }
  });

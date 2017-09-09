
chrome.runtime.onMessage.addListener(
  function(msg, sender, response) {
    if(msg.from == "telegramscroller" && msg.command == "show_tg_scroll_action")
    {
      chrome.pageAction.show(sender.tab.id);
      tabID = sender.tab.id;
      chrome.tabs.executeScript({code: 'console.log("ACTION INJECTED BRO")'});
    }
  });

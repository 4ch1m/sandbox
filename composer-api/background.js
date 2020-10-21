browser.composeAction.onClicked.addListener(async (tab) => {
  let details = await browser.compose.getComposeDetails(tab.id);

  if (details.isPlainText) {
    let body = details.plainTextBody;
    console.log(body);
    browser.compose.setComposeDetails(tab.id, { plainTextBody: body });
  }
});

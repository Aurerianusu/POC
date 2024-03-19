"use strict";

const { Builder, Key, until } = require('selenium-webdriver');

(async () => {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
  await driver.get("https://www.ornikar.com/assurance-auto");
  await driver.sleep(2000);
  await If_cookie();
  await waitForText(driver, "[class^='n-heading-style'], [class*=' n-heading-style']", 'PERSO, MON ASSURANCE AUTO, JE MAÎTRISE !');
  await waitForText(driver, ".is-mustard-new-style", 'J\'obtiens mon tarif');
  // Converting a 'html-attr-validation' step has to be done manually at this time
  await click(driver, ".is-mustard-new-style");
  await waitForText(driver, ".r-1x35g6", 'Bonjour !Vous êtes-vous déjà inscrit.e chez Ornikar pour le code ou la conduite ?');
  await click(driver, "[class^='_Container'], [class*=' _Container'] > :nth-child(2) [dir='auto']");
  await click(driver, "[class^='_Choices_jarxt'], [class*=' _Choices_jarxt'] > :nth-child(2)");
  await click(driver, ".kitt_Input_nELih");
  await sendKeys(driver, ".kitt_Input_nELih", 'tesla');
  await click(driver, "#downshift-0-item-1");
  await waitForText(driver, "[role='heading']", 'C\'est parti ! De quel modèle s’agit-il ?');
  await click(driver, ".kitt_Input_nELih");
  await click(driver, "#downshift-1-item-1");
  await waitForText(driver, "[role='heading']", 'Quelle est sa puissance fiscale ?');
  await click(driver, "[class^='kitt_Content'], [class*=' kitt_Content']");
  await click(driver, "[data-value='4']");
  await waitForText(driver, "[role='heading'] span", 'Quel est soncarburant / énergie ?');
  await click(driver, "[class^='kitt_Content'], [class*=' kitt_Content']");
  await click(driver, "[class^='kitt_DropdownItem'], [class*=' kitt_DropdownItem']");
  await waitForText(driver, "[role='heading']", 'Quelle est sa date de mise en circulation ?');
  await click(driver, "[placeholder='JJ']");
  await sendKeys(driver, "[placeholder='JJ']", '10');
  await click(driver, "[placeholder='MM']");
  await sendKeys(driver, "[placeholder='MM']", '10');
  await click(driver, "[placeholder='AAAA']");
  await sendKeys(driver, "[placeholder='AAAA']", '2020');
  await click(driver, "[class^='kitt_Content'], [class*=' kitt_Content']");
  await click(driver, ".kitt_Input_nELih");
  await click(driver, "#downshift-2-item-1");
  await click(driver, "[placeholder='JJ']");
  await sendKeys(driver, "[placeholder='JJ']", '10');
  await click(driver, "[placeholder='MM']");
  await sendKeys(driver, "[placeholder='MM']", '10');
  await click(driver, "[placeholder='AAAA']");
  await sendKeys(driver, "[placeholder='AAAA']", '2020');
  await click(driver, "[class^='kitt_Content'], [class*=' kitt_Content']");
  await click(driver, "[placeholder='JJ']");
  await sendKeys(driver, "[placeholder='JJ']", '10');
  await click(driver, "[placeholder='MM']");
  await sendKeys(driver, "[placeholder='MM']", '10');
  await click(driver, "[placeholder='AAAA']");
  await sendKeys(driver, "[placeholder='AAAA']", '2021');
  await click(driver, "[class^='_ScreenTemplate'], [class*=' _ScreenTemplate'] > :nth-child(2)");
  await click(driver, "[placeholder='AAAA']");
  await sendKeys(driver, "[placeholder='AAAA']", '2024');
  await click(driver, "[class^='_ScreenTemplate'], [class*=' _ScreenTemplate'] > :nth-child(2)");
  await click(driver, "[placeholder='MM']");
  await sendKeys(driver, "[placeholder='MM']", '03');
  await click(driver, "[placeholder='JJ']");
  await sendKeys(driver, "[placeholder='JJ']", '20');
  await click(driver, "[class^='_ScreenTemplate'], [class*=' _ScreenTemplate'] > :nth-child(2)");
  await click(driver, ".r-1rw5gz3 .r-1jie2fr");
  } finally {
    await driver.quit();
  }
})();

// move to utils.js

async function click(driver, selector, button = 0) {
  const element = await driver.findElement({css: selector});
  await driver.actions()
    .click(element, button)
    .perform();
}

async function getText(driver, selector) {
  const element = await driver.findElement({css: selector});
  return await element.getText();
}

async function sendKeys(driver, selector, keys) {
  const element = await driver.findElement({css: selector});
  await element.sendKeys(keys);
}

async function waitForText(driver, selector, expectedText, timeout = 30000) {
  await driver.wait(() => {
    return driver.executeScript((selector, expectedText) => {
      const element = document.querySelector(selector);
      return element && element.textContent.replace(/[\r\n]+/g, "").trim() === expectedText.trim();
    }, selector, expectedText);
  }, timeout);
}


// shared steps \\
  async function If_cookie() {
  if (await getText(driver, "[class^='Elements__Content-sc'], [class*=' Elements__Content-sc'] span") !== "'Gestion des cookies'") {
    return;
  }
  await click(driver, "#axeptio_btn_acceptAll");
  await driver.sleep(1000);
}

  
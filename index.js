const arrDiff = (arr1, arr2) => ({
  notInArr1: arr2.filter((x) => !arr1.includes(x)),
  notInArr2: arr1.filter((y) => !arr2.includes(y)),
});

const getEmailItems = (email_text) =>
  email_text
    .split("\n")
    .map((s) => s.replace(",", ""))
    .map((s) => s.trim())
    .map((s) => s.replace("and", ""))
    .filter(Boolean);

const getSiteItems = (site_text) =>
  site_text
    .split(",")
    .map((s) => s.replace("and", ""))
    .map((s) => s.trim())
    .filter(Boolean);

const getDiffs = (email_text, site_text) =>
  arrDiff(getEmailItems(email_text), getSiteItems(site_text));

document.getElementById("submit").addEventListener("click", () => {
  const email_text = document.getElementById("email_textarea").value;
  const site_text = document.getElementById("site_textarea").value;

  const { notInArr1, notInArr2 } = getDiffs(email_text, site_text);

  document.getElementById("response").innerText =
    notInArr1.length === 0 && notInArr2.length === 0
      ? "✅ Everything looks good."
      : `❌ Nope. Check it again.\nNot in Email:${notInArr1}\nNot in Site:${notInArr2}`;
});

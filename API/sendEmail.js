export const sendContactForm = async (data) =>
  fetch("/api/sendmail", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) console.log(res);
    return res.json();
  });

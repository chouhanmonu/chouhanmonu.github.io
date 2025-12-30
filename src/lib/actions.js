"use server";

export async function contactFormAction(prevState, formData) {
  const { name, email, message } = Object.fromEntries(formData.entries());
  if (!name || !email || !message) throw new Error("Bad request");

  const myHeaders = new Headers();
  myHeaders.append("x-api-key", "ehlohLhsjapou0987657893");
  myHeaders.append("Content-Type", "application/json");

  const res = await fetch("https://send-mail-chi.vercel.app/api/sendMail", {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  });

  const data = await res.json();
  if (data.error) throw new Error(data.error);

  return data;
}

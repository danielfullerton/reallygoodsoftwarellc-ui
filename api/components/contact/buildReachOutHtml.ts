export const buildReachOutHtml = (name: string, email: string, message: string, phone: string = 'N/A') => {
  return `
    <!doctype html>
    <html lang="en">
      <head>
          <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
          <title>New Message</title>
      </head>
      <body>
        <img src="${process.env.BASE_URL}/assets/logo_dark_text.png" style="width: 500px" alt="Logo">
        <p style="margin:0; font-family: 'Roboto', sans-serif">You have a new message from ${name}:</p>
        <p style="margin:0; font-family: 'Roboto', sans-serif">${message}</p>
        <p style="margin:0; font-family: 'Roboto', sans-serif">Phone: <a href="tel:${phone}">${phone}</a></p>
        <p style="margin:0; font-family: 'Roboto', sans-serif">Email: <a href="mailto:dan.frank.fullerton@gmail.com">${email}</a></p>
      </body>
    </html>
  `;
};

function doGet(e) {
  try {
    email = e.parameter.email;
    subject = e.parameter.subject;
    body = e.parameter.body;
  
    MailApp.sendEmail(email, subject, body)
    return ContentService.createTextOutput('Email sent')
  } catch(Exception) {
    return ContentService.createTextOutput('Failes to send email!')
  }
}

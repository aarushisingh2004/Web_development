from flask import  session
import smtplib

class MailService:
    """
        This class handles, sending of mails to the user on various occations.
        Ex. OTP, Update on Leave etc.
    """
    def __init__(self) -> None:
        self.OriginalOTP = None

    def send_otp(self,email,otp):
        """
            Function to send the OTP to the user, for email verification.
        """
        self.OriginalOTP = otp
        session['otp'] = otp
        message = """
        Hi,
        
        Welcome to the यaaत्री!

        Your OTP for login is {}.

                    """.format(str(otp))
        # message = "Your OTP for login is " + str(otp)
        subject = "OTP - यaaत्री"
        
        self.send_mail(email,message,subject)

    def verify_otp(self, otp):
        if int(otp) == int(self.OriginalOTP):
            return "Valid"
        return "Invalid"

    def send_mail(self,receiver , message , subject = ""):
        """
            Generic mail sending function, takes message, mail subject and receiver as input.
        """
        final_message = "Subject: {}\n\n{}".format(subject,message)
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login("yaatrimgmt@gmail.com", "gdpzrofppayyvscw")

        server.sendmail("yaatrimgmt@gmail.com",receiver,final_message)
        server.quit()

MS = MailService()

export const AUTH_STRING = {
  login: "התחברות",
  addEmail: "הכנס את המייל שלך בשביל להתחבר",
  email: "מייל",
  pass: "סיסמה",
  forgotPass: "שכחתה את הסיסמה?",
  noAccount: "אין לך חשבון?",
  signUp: "צור חשבון חדש",
  loggingIn: "מתחבר...",
} as const;

export const SIGNUP_STRING = {
  signUp: "הרשמה",
  createAccount: "צור חשבון חדש",
  email: "מייל",
  pass: "סיסמה",
  repeatPass: "חזור על הסיסמה",
  creatingAccount: "יוצר חשבון...",
  alreadyHaveAccount: "כבר יש לך חשבון?",
  login: "התחברות",
  thankYou: "תודה על ההרשמה!",
  checkEmail: "בדוק את המייל שלך כדי לאשר",
  confirmMessage:
    "התחברת בהצלחה. בדוק את המייל שלך כדי לאשר את החשבון שלך לפני התחברות.",
  passwordsNoMatch: "הסיסמאות לא תואמות",
} as const;

export const FORGOT_PASSWORD_STRING = {
  checkEmail: "בדוק את המייל שלך",
  resetSent: "הוראות לאיפוס הסיסמה נשלחו",
  resetMessage: "אם נרשמת באמצעות המייל והסיסמה שלך, תקבל מייל לאיפוס הסיסמה.",
  resetPassword: "אפס את הסיסמה שלך",
  resetDescription: "הקלד את המייל שלך ואנחנו נשלח לך קישור לאיפוס הסיסמה",
  email: "מייל",
  sending: "שולח...",
  sendReset: "שלח מייל לאיפוס סיסמה",
  alreadyHaveAccount: "כבר יש לך חשבון?",
  login: "התחברות",
} as const;

export const UPDATE_PASSWORD_STRING = {
  resetPassword: "אפס את הסיסמה שלך",
  enterNewPassword: "אנא הכנס את הסיסמה החדשה שלך להלן",
  newPassword: "סיסמה חדשה",
  saving: "שומר...",
  saveNewPassword: "שמור סיסמה חדשה",
} as const;

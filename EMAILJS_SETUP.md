# EmailJS Setup Instructions

Follow these steps to enable real email sending from your contact form:

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - Outlook
   - Yahoo
   - Or any other SMTP service
4. For Gmail:
   - Click "Connect Account"
   - Sign in with your Google account
   - Allow EmailJS to send emails on your behalf
5. Give your service a name (e.g., "Portfolio Contact")
6. **Copy the Service ID** (you'll need this later)
7. Click "Create Service"

## Step 3: Create Email Template

1. In the EmailJS dashboard, go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

```
Subject: New Portfolio Contact from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. **Important**: Set these template parameters:
   - `from_name` → corresponds to the "name" field
   - `from_email` → corresponds to the "email" field
   - `subject` → corresponds to the "subject" field
   - `message` → corresponds to the "message" field

5. Set "To Email" to: **abdulrahman.ehab.hussein@gmail.com**
6. **Copy the Template ID** (you'll need this later)
7. Click "Save"

## Step 4: Get Your Public Key

1. In the EmailJS dashboard, go to **Account** → **General**
2. Find your **Public Key** (also called API Key)
3. **Copy the Public Key** (it looks like: `user_xxxxxxxxxxxxxxxxx`)

## Step 5: Update Your Code

Open `d:\ME\Portifolio\WEB\script.js` and replace these three placeholders:

### Line 195 - Replace `YOUR_PUBLIC_KEY`:

```javascript
emailjs.init("YOUR_PUBLIC_KEY");
```

Replace with your actual Public Key:

```javascript
emailjs.init("user_xxxxxxxxxxxxxxxxx");
```

### Line 277 - Replace `YOUR_SERVICE_ID` and `YOUR_TEMPLATE_ID`:

```javascript
emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", contactForm);
```

Replace with your actual IDs:

```javascript
emailjs.sendForm("service_abc1234", "template_xyz5678", contactForm);
```

## Step 6: Test Your Form

1. Open your portfolio website
2. Go to the contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your email (abdulrahman.ehab.hussein@gmail.com) for the message

## EmailJS Free Tier Limits

- ✅ 200 emails per month
- ✅ Unlimited email templates
- ✅ All features included
- ✅ No credit card required

## Quick Reference

**Your EmailJS Dashboard**: https://dashboard.emailjs.com/

**What you need to copy:**

1. Public Key (from Account → General)
2. Service ID (from Email Services)
3. Template ID (from Email Templates)

## Troubleshooting

**Emails not sending?**

- Check browser console (F12) for errors
- Verify all three IDs are correct
- Make sure your EmailJS account is verified
- Check spam folder for test emails

**Getting CORS errors?**

- EmailJS should work from local files and any domain
- If issues persist, add your domain to EmailJS allowed origins

**Need more emails?**

- Free tier: 200/month
- Upgrade for more: https://www.emailjs.com/pricing/

---

## Alternative Options

If you prefer not to use EmailJS, here are alternatives:

### Option 1: Formspree (Simpler)

1. Go to [Formspree.io](https://formspree.io/)
2. Create free account
3. Create new form
4. Add `action="https://formspree.io/f/YOUR_FORM_ID"` to your form tag
5. Much simpler but gives you less control

### Option 2: Backend API

- Create your own backend with Node.js/Express
- Use Nodemailer to send emails
- More control but requires server hosting

---

**Need help?** Contact me at abdulrahman.ehab.hussein@gmail.com

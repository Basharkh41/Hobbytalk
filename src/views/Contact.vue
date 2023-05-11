<template>
  <title>Contact</title>
  <main class="Contact-main">
    <div class="contact-container">
      <h1>Contact With Us</h1>
      <p>
        Wir würden uns freuen, Ihre Fragen zu beantworten und<br />
        Ihnen zu helfen. nehmen Sie gerne Kontakt mit uns auf
      </p>

      <div class="contact-box">
        <div class="contact-left">
          <h3>Send your request</h3>
          <form
            action="https://formsubmit.co/935c935e9b4ebb2b8c22a6521b8c2853"
            method="POST"
          >
            <div class="input-row">
              <div class="input-group">
                <label> Email </label>
                <input type="email" name="Email" required />
              </div>
              <div class="input-group">
                <label> Subject </label>
                <input type="text" name="Subject" required />
              </div>
            </div>

            <label> Message </label>
            <textarea row="5" name="Message" required></textarea>
            <button type="submit" class="Send">Send</button>
          </form>
        </div>
        <div class="contact-right">
          <h3>Reach us</h3>
          <table>
            <tr>
              <td>Bashar Khalil</td>
              <td>bashar.khalil@student.htldornbirn.at</td>
            </tr>
            <tr>
              <td>Samuel Lins</td>
              <td>samuel.lins@student.htldornbirn.at</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
* {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  margin: 0;
  font-size: 25px;
}

.contact-container {
  width: 80%;
  margin: 50px auto;
}
.contact-box {
  background-color: rgb(238, 233, 233);
  display: flex;
}
.contact-left {
  flex-basis: 60%;
  padding: 40px 60px;
}
.contact-right {
  flex-basis: 40%;
  padding: 40px;
  color: #000000;
}
.contact-container h1 {
  padding-bottom: 70px;
  font-size: 80px;
  color: #fe4e69;
}
.contact-right h3 {
  color: #fe4e69;
}
.input-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.input-row .input-group {
  flex-basis: 45%;
}
.contact-container p {
  font-size: 30px;
  color: #000000;
  text-align: center;
  margin-bottom: 40px;
}
input {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  padding-bottom: 5px;
  color: rgb(0, 0, 0);
}
textarea {
  width: 100%;
  border: 1px solid #ccc;
  outline: none;
  padding: 10px;
  box-sizing: border-box;
  color: rgb(0, 0, 0);
}
label {
  margin-bottom: 6px;
  display: block;
  color: #fe4e69;
}
.Send {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  background-color: #fe4e69;
  width: 100px;
  border: none;
  outline: none;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding-top: 0px;
  margin-top: 20px;
  cursor: pointer;
  font-weight: bold;
}
.Send:hover {
  background-color: rgb(0, 0, 0);
  color: #fe4e69;
  font-weight: bold;
}

.contact-left h3 {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 600;
  margin-bottom: 40px;
  font-size: 30px;
}

tr td:first-child {
  padding-right: 30px;
}
tr td {
  padding-top: 40px;
}
.logo {
  display: flex;
}
img {
  position: absolute;
}
td {
  font-size: 20px;
}
</style>

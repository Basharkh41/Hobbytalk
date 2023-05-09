<template>
    <title> Contact </title>
    <main>
    <div class="container">
    <h1> Contact With Us </h1>
    <p>Wir würden uns freuen, Ihre Fragen zu beantworten und<br>
       Ihnen zu helfen. nehmen Sie gerne Kontakt mit uns auf </p>

    <div class="contact-box">
        <div class="contact-left">
            <h3> Send your request </h3>
            <form action="https://formsubmit.co/935c935e9b4ebb2b8c22a6521b8c2853" method="POST">
                <div class="input-row">
                    <div class="input-group">
                        <label> Email </label>
                        <input type="email" name="Email" required>
                    </div>
                    <div class="input-group">
                        <label> Subject </label>
                        <input type="text" name="Subject" required>
                    </div>
                </div>

                <label> Message </label>
                <textarea row="5" name="Message" required></textarea>
                <button type="submit">Send</button>
            </form>          
        </div>
        <div class="contact-right">
            <h3> Reach us</h3>
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
*{
    margin: 0;
    font-size: 14px;
}

.container{
    width: 80%;
    margin: 50px auto;
}
.contact-box{
    background-color: #fff;
    display: flex;
}
.contact-left{
    flex-basis: 60%;
    padding: 40px 60px;
}
.contact-right{
    flex-basis: 40%;
    padding: 40px;
    color: #fff;
}
h1{
    margin-bottom: 10px;
    font-size: 30px;
    color: #FE4E69;
}
h3{
    color: #FE4E69;
}
.container p{
    margin-bottom: 40px;
}
.input-row{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
.input-row .input-group{
    flex-basis: 45%;
}
p{
    font-size: 20px;
}
input{
    width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    padding-bottom: 5px;
}
textarea{
    width: 100%;
    border: 1px solid #ccc;
    outline: none;
    padding: 10px;
    box-sizing: border-box;
}
label{
    margin-bottom: 6px;
    display: block;
    color: #FE4E69;
}
button{
    background-color: #FE4E69;
    width: 100px;
    border: none;
    outline: none;
    color: #fff;
    height: 35px;
    border-radius: 30px;
    margin-top: 20px;
    box-shadow: 0px 5px 15px 0px rgba(28,0,181,0.3);
}
.contact-left h3{
    font-weight: 600;
    margin-bottom: 30px;
    font-size: 20px;
}

tr td:first-child{
    padding-right: 30px;
}
tr td{
    padding-top: 40px;
}
.logo{
    display: flex;
}
img{
    position: absolute;
    padding-left: 55%;
}
td{
    font-size: 20px;
}

</style>
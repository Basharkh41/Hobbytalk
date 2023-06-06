<template>
  <div class="contact-header">
    <h1>
      Welcome to Hobbymeet, a place where students with similair Interests could
      meet eachother
    </h1>
  </div>
  <div class="Home-Container">
    <div class="section">
      <h2>About Hobbymeet:</h2>
      <p></p>
    </div>
    <div class="section">
      <h2>Creators</h2>
      <div class="Creators">
        <div class="Creator-Bashar">
          <img src="BasharKhalil.jpg" />
          <p>Bashar Khalil, 4cWI</p>
        </div>
        <div class="Creator-Samuel">
          <img src="SamuelLins.jpg" />
          <p>Samuel Lins, 4cWI</p>
        </div>
      </div>
      <div class="sucuk">
        <h2>Our Goals</h2>
      <div class="sucuk_li">
        <ul>
          <li>Make it easier for students to meet other students</li>
          <li>support practicing hobbies instead of being inactive</li>
          <li>better the unity of students from different classes</li>
        </ul>
      </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <p>&copy; 2023 Hobbymeet. All rights reserved.</p>
  </div>
</template>


<style>
.Home-Container {
  padding: 50px;
}
h1 {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #fe4e69;
  font-size: 80px;
  text-align: center;
  margin-top: 5%;
}
.section h2 {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 50px;
  text-align: center;
  margin-top: 15%;
}
.section {
  margin-bottom: 10px;
  padding-right: 1000px;
  
 
  
}

.section h2 {
  color: #333;
}
.Creators {
  display: flex;
  flex-direction: row;
  transform: scale(0.5);
  
  
  
}
.Creators p {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  text-align: center;
  font-size: 30px;
  
}
.Creator-Samuel .Creator-Bashar img {
  flex: 1;
  

 
}

.sucuk{
  padding-top: 10px;
}
.sucuk_li{
  padding-top: 100px ;
  text-align: center;
  font-size: ;
}

.footer p{
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  text-align: right;
  font-size: 20px;
  margin-top: 100px;
}

.ul{
  padding: 10px;
  
}
</style>


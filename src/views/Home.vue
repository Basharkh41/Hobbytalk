<template>
  <div class="contact-header">
    <h1>
      Welcome to HobbyTalk, a place where students with similair Interests could
      meet eachother
    </h1>
  </div>
  <div class="Home-Container">
    <div class="section">
      <h2>About HobbyTalk:</h2>
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
      <div class="goals">
        <h2>Our Goals</h2>
        <div class="goals_li">
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
    <p>&copy; 2023 HobbyTalk. All rights reserved.</p>
  </div>
</template>

<style scoped>
h1 {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #fe4e69;
  font-size: 60px;
  text-align: center;
  margin-top: 5%;
}
img{
  margin-top: -350px;
}
.section h2 {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 30px;
  text-align: center;
  margin-top: 15%;
}

.section {
  margin-bottom: 5px;
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

.goals {
  padding-top: 10px;
}
.goals_li {
  padding-top: 100px;
  text-align: center;
  font-size: ;
}

.footer p {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  text-align: right;
  font-size: 20px;
  margin-top: 100px;
}

.ul {
  padding: 10px;
}


@import url('https://fonts.googleapis.com/css?family=Montserrat:500');
.Logo{
  margin-right: auto;
}
*{
  margin: 0;
  padding: 0;
}

</style>

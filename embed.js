var mongoose = require ('mongoose');
mongoose.connect("mongodb://localhost/blog_demo", { useMongoClient: true});

//User email-name
var userSchema = new mongoose.Schema({
  email: String,
  name: String
});

var User = mongoose.model("User", userSchema);

//POST - title, comment
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});

var post = mongoose.model("Post", postSchema);

var newUser = new User({
  email: "chibaba@brown.org",
  name: "chibaba Brown"
});
newUser.save(function(err, user){
  if(err){
    console.log(err);
  }else {
    console.log(user);
  }
});
var mongoose = require ('mongoose');
mongoose.connect("mongodb://localhost/blog_demo", { useMongoClient: true});

var postSchema = new mongoose.Schema({
  title: String,
  content: String
});
//User email-name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

//POST - title, comment

var post = mongoose.model("Post", postSchema);

// var newUser = new User({
//   email: "ogwanu@brown.edu",
//   name: "chinedu brown"
// });

// newUser.posts.push({
//   title: "How to bre Polyjuice portion",
//   content: "just kidding nothing of such"
// });
// newUser.save(function(err, user){
//   if(err){
//     console.log(err);
//   }else {
//     console.log(user);
//   }
// });

// var newPost = new post({
//   title: "Reflections on apples",
//   content: "they are delicious"
// }); 
// newPost.save(function(err, Post){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(Post);
//   }
// })
User.findOne({ name: "chinedu brown" }, function(err, user){
  if(err){
    console.log(err);
  } else {
    user.posts.push({
      title: "three things i dont like",
      content: "never let your feRar decoide for you"
    });
    user.save(function(err, user){
      if(err){
        console.log(err);
      }else {
        console.log(user);
      }
    })
  }
})
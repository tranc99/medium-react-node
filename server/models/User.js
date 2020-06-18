const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    provider: String,
    provider_id: String,
    token: String,
    provider_pic: String,
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    following: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
      }
    ]
  }
)

UserSchema.methods.follow = (user_id) => {
  if (this.following.indexOf(user_id) === -1) {
    this.following.push(user_id)
  }
  return this.save()
}

UserSchema.methods.addFollower = (follower_id) {
    this.followers.push(follower_id)
}

module.exports = mongoose.model('User', UserSchema)

Meteor.startup(function () {
    Meteor.methods({
        //Clears ALL items in collection PlayerVotes
        clearPlayerVotes: function () {
            console.log("Cleared PlayerVotes collection");
            return PlayerVotes.remove({});
        },
        resetPlayerVotes: function () {
            var list = PlayerVotes.find().fetch();
            _.each(list, function (coll) {
                PlayerVotes.update(coll, {$set: {score: 0}});
            });
        },
        addUserPoints: function(user){
            var list = PlayerVotes.findOne({userId:user._id})
            PlayerVotes.update(list, {$inc: {score: 5}});
        },
        addComment: function(message, user){
            if(user !== null) {
                Comments.insert({
                    comment: message,
                    user: user,
                    userId: user._id,
                    name: user.profile.name,
                    createdAt: new Date()
                });
            } else {
                Comments.insert({
                    comment: message,
                    name: 'anon',
                    createdAt: new Date()
                });
            }
        },
        postBlog: function(title, body){
            Blogpost.insert({
                title: title,
                body: body,
                createdAt: new Date()
            });
        }

    })
});

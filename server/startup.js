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
            var list = PlayerVotes.findOne({name:user.profile.name})
            PlayerVotes.update(list, {$inc: {score: 5}});
        }

    })
});
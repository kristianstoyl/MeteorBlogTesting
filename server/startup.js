Meteor.startup(function () {
    Meteor.methods({
        //Clears ALL items in collection PlayerVotes
        clearPlayerVotes: function () {
            console.log("Cleared PlayerVotes collection");
            return PlayerVotes.remove({});
        },
        /*
         TODO:
         function to reset all votes to 0.
         Also teaches me to search by userID


         UPDATE:
         WORKS, for each funka awesome
         */
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
/*
 searchPlayerVotesId = function(id){
 return PlayerVotes.findOne({_id:id});
 }


 */
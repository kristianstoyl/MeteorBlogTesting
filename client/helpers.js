Session.set('counter', 0);
Session.set('name', '');

Template.home.helpers({
    counter: function () {
        //return Counter.find().fetch()[0]._id.count;
        return Session.get('counter');
    },
    points: function () {
        //return Meteor.user(); //thyis was just to see what Meteor.user returned
        return Session.get('counter') * 4;
        //return Counter.find().count() * 4;
    }
});

Template.leaderboard.helpers({
    playerinfo: function () {
        return PlayerVotes.find({}, {sort: {score: -1}});
    }
});
Template.player.helpers({
    userName: function () {
        //console.log(this.user);
        var result = Meteor.users.findOne({_id: this.user});
        if(typeof result.profile.name !== undefined)
            return result.profile.name;
    }
});

// remember to read TODO.txt

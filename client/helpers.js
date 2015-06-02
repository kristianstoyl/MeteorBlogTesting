Session.set('counter', 0);

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

Template.testing.helpers({
    playerinfo: function(){
        return PlayerVotes.find({},{ sort: { score: -1} });
    }
});

// remember to read TODO.txt

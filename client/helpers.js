Session.set('counter', 0);
document.title = "My Title";

Template.home.helpers({
    counter: function () {
        return Session.get('counter');
    },
    blogPosts: function(){
        return Blogpost.find({}, {sort: {createdAt: -1}});
    }
});

Template.blog.helpers({

});

Template.leaderboard.helpers({
    playerinfo: function () {
        return PlayerVotes.find({}, {sort: {score: -1}});
    }
});
Template.player.helpers({
    userName: function () {
        return this.name;
    }
});

Template.chat.helpers({
    comments: function(){
        return Comments.find({}, {sort: {createdAt: -1}});
    }
});

Template.chat.rendered = function(){
    $(".scroll").tinyscrollbar();
};

Template.registerHelper('formatDate', function(date){
    return moment(date).format('DD-MM-YYYY');
});

Template.registerHelper('breaklines', function(text){
    text = text.replace(/(\r\n|\n|\r)/gm, '<br/>');
    return text;
});

// remember to read TODO.txt

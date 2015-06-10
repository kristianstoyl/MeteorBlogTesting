Template.home.events({
    'click #newPost': function () {
        $('.postform').slideToggle("fast");
        $("#textid").val('');
        $("#bodyid").val('');
    },
    'submit .postform': function(event){
        event.preventDefault();
        var title = $("#textid");
        var body = $("#bodyid");
        var titletext = title.val();
        var bodytext = body.val();
        console.log(titletext);
        if(title !== '' && body !== '')
            Meteor.call('postBlog', titletext, bodytext);
        title.val('');
        body.val('');
        $('.postform').slideToggle("fast");
    }
});

Template.leaderboardMain.events({
    'click #abutton': function () {
        swal({
                title: "Are you sure?",
                text: "You will not be able to recover these \n valuable points!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel plx!",
                closeOnConfirm: false,
                closeOnCancel: false
            },
            function (isConfirm) {
                if (isConfirm) {
                    Session.set('counter', 0);
                    Meteor.call('resetPlayerVotes');
                    swal("Deleted!",
                        "Your imaginary points has been deleted.",
                        "success");
                } else {
                    swal("Cancelled", "Your imaginary points are safe :)", "error");
                }
            }
        );
    },
    'click #poeng': function () {
        Meteor.call('addUserPoints', Meteor.user());
    },
    'click #del': function () {
        Meteor.call('clearPlayerVotes')
    }
});

Template.playground.events({
    'submit .input-group': function (event) {
        var form = $("#commentform");
        event.preventDefault();
        var comment = form.val();
        var user = Meteor.user();
        console.log(user);
        if (comment !== '')
            Meteor.call('addComment', comment, user);
        form.val('');
    },
    'click #showChat': function () {
        console.log('clicked');
        $('.chat').slideToggle("fast");
    },
    'click #showleader': function () {
        console.log('clicked');
        $('.leader').slideToggle("fast");
    }
});
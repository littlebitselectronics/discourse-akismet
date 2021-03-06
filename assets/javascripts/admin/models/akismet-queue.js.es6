export default {
  confirmSpam: function(post) {
    return Discourse.ajax("/admin/akismet/confirm_spam", {
      type: "POST",
      data: {
        post_id: post.get("id")
      }
    });
  },

  allow: function(post) {
    return Discourse.ajax("/admin/akismet/allow", {
      type: "POST",
      data: {
        post_id: post.get("id")
      }
    });
  },

  deleteUser: function(post) {
    return Discourse.ajax("/admin/akismet/delete_user", {
      type: "DELETE",
      data: {
        user_id: post.get("user_id"),
        post_id: post.get("id")
      }
    });
  },

  findAll: function() {
    return Discourse.ajax("/admin/akismet/index.json").then(function(result) {
      result.posts = result.posts.map(function(post) {
        return Discourse.Post.create(post);
      });
      return result;
    });
  }
};

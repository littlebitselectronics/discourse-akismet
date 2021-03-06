module Jobs
  class CheckAkismetPost < Jobs::Base

    # Check a single post for spam. We do this for TL0 to get a faster response
    # without batching.
    def execute(args)
      raise Discourse::InvalidParameters.new(:post_id) unless args[:post_id].present?

      post = Post.where(id: args[:post_id]).first
      return unless post.present?

      DiscourseAkismet.check_for_spam(post)
    end
  end
end


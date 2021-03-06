class PostCommentsController < ApplicationController

  def create
    @book = Book.find(params[:id])
    comment = current_user.post_comments.new(post_comment_params)

    comment.book_id = @book.id
    # @book.user_id = current_user.id　練習

    comment.save
    redirect_to book_path(@book)
  end

private
def post_comment_params
    params.require(:post_comment).permit(:comment)
end

end
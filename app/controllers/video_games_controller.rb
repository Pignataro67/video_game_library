class VideoGamesController < ApplicationController

  def index
    video_games = Video_game.all
    render json: video_games
  end

  def create
    video_game = Video_game.new(video_game_params)
    if video_game.save
    render json: video_game
  end

    def update
    if @video_game.update(video_game_params)
    render json: @video_game
  end

  private
  def video_game_params
    params.permit(:name, :age_range, :description, :pic_url)
  end

  def set_video_game
    @video_game = Video_game.find_by(id: params[:id])
  end
end

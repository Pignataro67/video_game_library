class VideoGamesController < ApplicationController
  before_action :set_video_game, only: [:show, :destroy, :update]

  def index
    video_games = Video_game.all.order('name ASC')
    render json: video_games
  end

  def show
    render json: @video_game
  end

  def create
      video_game = Video_game.new(video_game_params)
    if video_game.save
      render json: video_game
    else
      render json: { message: video_game.errors }
    end
  end

  def update
    if @video_game.update(video_game_params)
      render json: @video_game
    else
      render json: { message: @video_game.errors }
    end
  end

  def destroy
    if @video_game.destroy
      render status: 204
    else
      render json: { message: "ERROR, ERROR cannot destroy"}, status: 400
    end
  end

  private
  
  def video_game_params
    params.permit(:name, :age_range, :description, :pic_url)
  end

  def set_video_game
    @video_game = Video_game.find_by(id: params[:id])
  end
end

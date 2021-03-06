# == Schema Information
#
# Table name: cards
#
#  id         :integer          not null, primary key
#  question   :string           not null
#  answer     :text             not null
#  deck_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Card < ApplicationRecord
  validates :deck_id, presence: true
  validates :question, :answer, length: { allow_blank: false, message: "cannot be blank" }

  belongs_to :deck,
    primary_key: :id,
    foreign_key: :deck_id,
    class_name: :Deck,
    inverse_of: :cards

  has_many :studyscores,
    primary_key: :id,
    foreign_key: :card_id,
    class_name: :Studyscore

end

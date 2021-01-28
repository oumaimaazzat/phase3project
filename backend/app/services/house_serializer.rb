class HouseSerializer
  def initialize(house_object)
    @house = house_object
  end

  def to_serialized_json
    @house.to_json(
            :include => {:wizards => {:only => [:id, :name]}},
            :except => [:created_at, :updated_at]
        ) 
  end

end
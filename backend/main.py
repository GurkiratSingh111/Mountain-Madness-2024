from flask import Flask, request
from flask_restx import Api, Resource, fields
from config import DevConfig
from models import Plant
from exts import db

app = Flask(__name__)
app.config.from_object(DevConfig)

db.init_app(app)

# Check the api is running by - localhost/docs
api = Api(app, doc='/docs')


# serializing the model to json for frontend
plant_model = api.model(
    "Plant",
    {
        "id":fields.Integer(),
        "name":fields.String(),
        "photo":fields.String()
    }
)

# verified through postman !!
@api.route('/hello')
class HelloResoure(Resource):

    @api.marshal_list_with(plant_model)
    def get(self):
        return {"message":"Hello World"}


@api.route('/plant')
class PlantResource(Resource):
    
    @api.marshal_with(plant_model)
    def get(self):
        plants=Plant.query.all()
        return plants
    
    @api.marshal_with(plant_model)
    def post(self):
        data = request.get_json()
        new_plant = Plant(
            id = data.get('id'),
            name = data.get('name'),
            photo = data.get('photo')
        )
        new_plant.save()
        return new_plant,201
    

@api.route('/plant/<int:id>')
class PlantResource(Resource):
    
    @api.marshal_with(plant_model)
    def get(self, id):
        plant = Plant.query.get_or_404(id)
        return plant

    #TODO: implement updating a plant 

    # @api.marshal_with(plant_model)
    # def put(self, id):
    #     plant_to_update = Plant.query.get_or_404(id)
    #     data = request.get_json()
    #     plant_to_update.update(data.get('name'))
    #     return plant_to_update

    @api.marshal_with(plant_model)
    def delete(self, id):
        plant_to_delete = Plant.query.get_or_404(id)
        plant_to_delete.delete()
        return plant_to_delete


@app.shell_context_processor
def make_shell_context():
    return {
        "db":db,
        "Plant":Plant
    }


if __name__ == '__main__':
    app.run()


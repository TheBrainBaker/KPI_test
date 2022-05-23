from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Investment
from .serializers import InvestmentSerializer


class InvestmentView(
  APIView,
):

  def get(self, request, id=None):
    data = request.GET
    ville = None
    etat_d_avancement=None

    if "ville" in data:
        ville = data["ville"]
    
    if "etat_d_avancement" in data:
        etat_d_avancement = data["etat_d_avancement"]
    
    # print("id", id)
    # print("ville", ville)
    # print("etat_d_avancement", etat_d_avancement)
    
    if id:
      try:
        queryset = Investment.objects.get(id=id)
      except Investment.DoesNotExist:
        return Response({'errors': 'This investment item does not exist.'}, status=400)
      read_serializer = InvestmentSerializer(queryset)

    else:
      queryset = Investment.objects.all()
      if ville!=None:
          queryset = queryset.filter(ville=ville)
      if etat_d_avancement!=None:
          queryset = queryset.filter(etat_d_avancement=etat_d_avancement)
      read_serializer = InvestmentSerializer(queryset, many=True)

    return Response(read_serializer.data)


#   def post(self, request):
#     # Pass JSON data from user POST request to serializer for validation
#     create_serializer = InvestmentSerializer(data=request.data)

#     # Check if user POST data passes validation checks from serializer
#     if create_serializer.is_valid():

#       # If user data is valid, create a new todo item record in the database
#       todo_item_object = create_serializer.save()

#       # Serialize the new todo item from a Python object to JSON format
#       read_serializer = InvestmentSerializer(todo_item_object)

#       # Return a HTTP response with the newly created todo item data
#       return Response(read_serializer.data, status=201)

#     # If the users POST data is not valid, return a 400 response with an error message
#     return Response(create_serializer.errors, status=400)


#   def put(self, request, id=None):
#     try:
#       # Check if the todo item the user wants to update exists
#       todo_item = Investment.objects.get(id=id)
#     except Investment.DoesNotExist:
#       # If the todo item does not exist, return an error response
#       return Response({'errors': 'This todo item does not exist.'}, status=400)

#     # If the todo item does exists, use the serializer to validate the updated data
#     update_serializer = InvestmentSerializer(todo_item, data=request.data)

#     # If the data to update the todo item is valid, proceed to saving data to the database
#     if update_serializer.is_valid():

#       # Data was valid, update the todo item in the database
#       todo_item_object = update_serializer.save()

#       # Serialize the todo item from Python object to JSON format
#       read_serializer = InvestmentSerializer(todo_item_object)

#       # Return a HTTP response with the newly updated todo item
#       return Response(read_serializer.data, status=200)

#     # If the update data is not valid, return an error response
#     return Response(update_serializer.errors, status=400)


#   def delete(self, request, id=None):
#     try:
#       # Check if the todo item the user wants to update exists
#       todo_item = Investment.objects.get(id=id)
#     except Investment.DoesNotExist:
#       # If the todo item does not exist, return an error response
#       return Response({'errors': 'This todo item does not exist.'}, status=400)

#     # Delete the chosen todo item from the database
#     todo_item.delete()

#     # Return a HTTP response notifying that the todo item was successfully deleted
#     return Response(status=204)


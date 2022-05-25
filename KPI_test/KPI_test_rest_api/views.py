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


  def put(self, request, id=None):
    try:
      investment_item = Investment.objects.get(id=id)
    except Investment.DoesNotExist:
      return Response({'errors': 'This investment item does not exist.'}, status=400)

    update_serializer = InvestmentSerializer(investment_item, data=request.data)

    if update_serializer.is_valid():
      
      investment_item_object = update_serializer.save()

      read_serializer = InvestmentSerializer(investment_item_object)

      return Response(read_serializer.data, status=200)

    return Response(update_serializer.errors, status=400)
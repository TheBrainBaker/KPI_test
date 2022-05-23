from rest_framework import serializers

from .models import *

class InvestmentSerializer(serializers.ModelSerializer):
  class Meta:
      model = Investment
      fields = (
        'id',
        'titreoperation',
        "entreprise",
        "annee_de_livraison",
        "ville",
        "mandataire",
        'nombre_de_lots',
        'ppi',
        'lycee',
        "notification_du_marche",
        "codeuai",
        "longitude",
        "etat_d_avancement",
        'montant_des_ap_votes_en_meu',
        'cao_attribution',
        'latitude',
        "maitrise_d_oeuvre",
        "mode_de_devolution",
        "annee_d_individualisation",
        "enveloppe_prev_en_meu"
      )
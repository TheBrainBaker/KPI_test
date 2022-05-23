from pyexpat import model
from django.db import models

# Create your models here.

class Investment(models.Model):
  id = models.AutoField(
    primary_key=True
  )

  titreoperation = models.TextField(
    max_length=200,
    null=False,
    blank=False
  )

  entreprise = models.TextField(
    max_length=50,
    null=True,
    blank=False
  )

  annee_de_livraison = models.TextField(
    max_length=10,
    null=True,
    blank=False
  )

  ville = models.TextField(
    max_length=50,
    null=False,
    blank=False
  )

  mandataire = models.TextField(
    max_length=50,
    null=True,
    blank=False
  )

  nombre_de_lots = models.IntegerField(
    null=True
  )

  ppi = models.TextField(
    max_length=20,
    null=False,
    blank=False
  )

  lycee = models.TextField(
    max_length=50,
    null=False,
    blank=False
  )

  notification_du_marche = models.TextField(
    max_length=20,
    null=True,
    blank=False
  )

  codeuai = models.TextField(
    max_length=20,
    null=False,
    blank=False
  )

  longitude = models.TextField( #text because floats have precision issues
    max_length=50,
    null=True,
    blank=False
  )

  etat_d_avancement = models.TextField(
    max_length=50,
    null=False,
    blank=False
  )

  montant_des_ap_votes_en_meu = models.TextField( #text because floats have precision issues
    max_length=50,
    null=True,
    blank=False
  )

  cao_attribution = models.TextField(
    max_length=20,
    null=True,
    blank=False
  )

  latitude = models.TextField( #text because floats have precision issues
    max_length=50,
    null=True,
    blank=False
  )

  maitrise_d_oeuvre = models.TextField(
    max_length=50,
    null=True,
    blank=False
  )

  mode_de_devolution = models.TextField(
    max_length=50,
    null=True,
    blank=False
  )

  annee_d_individualisation = models.TextField(
    max_length=10,
    null=True,
    blank=False
  )

  enveloppe_prev_en_meu = models.TextField( #text because floats have precision issues
    max_length=50,
    null=True,
    blank=False
  )

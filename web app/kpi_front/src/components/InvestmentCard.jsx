import React, { useRef, useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';

import axios from "axios";
import { BASE_URL } from "..";

const InvestmentCard = (params) => {
	const [investment, setInvestment] = useState(null);
	const [changed, setChanged] = useState(false);

	const toast = useRef(null);

	const renderFooter = () => {
        return (
            <div>
                <Button loading = {changed} 
				label="Save"
				icon="pi pi-check"
				onClick = { (e) =>
					{
						setChanged(true)
						updateInvestment()
					}
				} autoFocus />
            </div>
        );
    }

	const updateInvestment = () => {
		let payload = {...investment}
		for (const key in Object.keys(payload)) {
			let k = Object.keys(payload)[key]
			if (Object.keys(fieldTypeSerialization).includes(k)) {
				payload[k] = fieldTypeSerialization[k](payload[k])
			}
		}

		axios.put(BASE_URL + `investment/`+payload.id+"/", payload)
		.then(res => {
			setChanged(false)
			toast.current.show({severity:'success', summary: 'Mis à jour avec succès !', detail:'Les données ont bien été prises en compte.', life: 3000});
		})
		.catch(
			function (error) {
				//console.log(error);
				toast.current.show({severity:'error', summary: 'Erreur lors de la mise à jour...', detail:'Veuillez réessayer.', life: 3000});
				setChanged(false)
			}
		);
		
    }

	const dictionary = {
		"fr": {
			"titreoperation":"titre de l'opération",
			"entreprise":"entreprise",
			"annee_de_livraison":"année de livraison",
			"ville":"ville",
			"mandataire":"mandataire",
			"ppi":"ppi",
			"lycee": "lycée",
			"notification_du_marche": "notification du marche",
			"codeuai": "code UAI",
			"longitude": "longitude",
			"etat_d_avancement": "état d'avancement",
			"montant_des_ap_votes_en_meu": "montant des ap votes en MEU",
			"cao_attribution": "CAO attribution",
			"latitude": "latitude",
			"maitrise_d_oeuvre": "maitrise d'oeuvre",
			"mode_de_devolution": "mode de dévolution",
			"annee_d_individualisation": "année d'individualisation",
			"enveloppe_prev_en_meu": "envelope prévisionnelle en MEU",
			"nombre_de_lots": "nombre de lots"
		}
	}

	const fieldTypeSerialization = {
		"nombre_de_lots": (e) => {return parseInt(e)}
	}

	return (
		<>
			<Toast ref={toast} />
			{(params.investment) &&
			<Dialog contentClassName="row p-0 m-0" header={params.investment.titreoperation} visible={params.visible} style={{ width: '50vw' }} footer={renderFooter()} 
			onHide={
				() =>
				{
					setInvestment(null)
					params.onHide()
				}
			}>
				{
					Object.entries(dictionary.fr).map((item, i) => {
						if (params.investment!=null && (investment===null || investment.id!=params.investment.id))
						{
							setInvestment(params.investment)
						}
						else
						return (
							<>
								<p className="col-2">{item[1]} : </p> 
								<InputText className="col-4" value={investment[item[0]]} onChange={(e) => {
											setInvestment({...investment,  [item[0]]: e.target.value
										   	})
										}
									}
								/>
							</>
						)
					})
				}
			</Dialog>}
		</>
	);
};

export default InvestmentCard;

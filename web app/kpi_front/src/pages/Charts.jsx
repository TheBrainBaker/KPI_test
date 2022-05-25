import React, { useEffect, useState } from "react";
import Layout from "../Layouts";
import { InputText } from 'primereact/inputtext';
import { Chart } from 'primereact/chart';
import { Button } from 'primereact/button';
import { Skeleton } from 'primereact/skeleton';
import axios from "axios";
import { BASE_URL } from "..";

const Charts = () => {
	const [loading, setLoading] = useState(false);
	
    const [villeInput, setVilleInput] = useState('');
    const [etatAvanceInput, setEtatAvanceInput] = useState('');

	const [investments, setInvestments] = useState([]);

	const [chartData, setChartData] = useState(null);

    const [lightOptions] = useState({
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    });
	
	function loadInvestments(v = villeInput, e = etatAvanceInput) {
		setLoading(true);

		let params = {};

		if (v!=='') {
			params["ville"] = v;
		}
		if (e!=='') {
			params["etat_d_avancement"] = e;
		}

		axios.get(BASE_URL + `investments`, { params : params })
		.then(res => {
			setInvestments(res.data);
			setChartData({
				labels: ['Opération livrée', 'En Chantier', 'Abandonné', 'Autre'],
				datasets: [
					{
						data: [
							res.data.filter((e)=>{if(e.etat_d_avancement=='Opération livrée') return true}).length,
							res.data.filter((e)=>{if(e.etat_d_avancement=='En Chantier') return true}).length,
							res.data.filter((e)=>{if(e.etat_d_avancement=='Abandonné') return true}).length,
							res.data.filter((e)=>{if(e.etat_d_avancement!='Opération livrée' && e.etat_d_avancement!='En Chantier' && e.etat_d_avancement!='Abandonné') return true}).length,
						],
						backgroundColor: [
							"#42A5F5",
							"#66BB6A",
							"#FFA726",
							"#CA78BB"
						],
						hoverBackgroundColor: [
							"#64B5F6",
							"#81C784",
							"#FFB74D",
							"#DA88CB"
						]
					}
				]
			})
			setLoading(false);
		})
		.catch(
			function (error) {
				setLoading(false);
				//console.log('error!');
			}
		);
	}

	useEffect(() => {
		loadInvestments();
    }, []);

	return (
		<Layout>			
			<div className="page_container">
				<div className="home_container align-items-start">
					<div data-aos="fade-down" className="d-flex justify-content-center align-items-center">
						<p className="text-white f20 mb-0 me-1">Filtrer par ville : </p>
						<InputText value={villeInput} onChange={(e) => setVilleInput(e.target.value)} />
						<p className="text-white f20 mb-0 me-1 ms-1">flitrer par état d'avancement : </p>
						<InputText value={etatAvanceInput} onChange={(e) => setEtatAvanceInput(e.target.value)} />
						<Button onClick = { () =>
							{
								loadInvestments();
							}
						} className="ms-2" label="filtrer" />
						<Button onClick={ () =>
							{
								setVilleInput('');
								setEtatAvanceInput('');
								loadInvestments('', '');
							}
						} className="ms-2 p-button-danger" label="supprimer les filtres" />
					</div>
					<div data-aos="fade-up" className="">
						{
							(!loading && 
							<div className="card flex align-items-center">
								<Chart type="pie" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%' }} />
							</div>) ||
							<Skeleton height="40rem" className="mb-2" borderRadius="4px"></Skeleton>
						}
					</div>
				</div>
				<div className="float-end mt-3 px-4 pb-2 pb-md-0">
					<p className="mb-0 text-white f12">
						© 2022 KPI
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default Charts;

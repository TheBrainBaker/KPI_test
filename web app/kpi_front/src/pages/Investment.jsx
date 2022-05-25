import React, { useEffect, useState } from "react";
import Layout from "../Layouts";
import InvestmentCard from "../components/InvestmentCard";
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Skeleton } from 'primereact/skeleton';
import axios from "axios";
import { BASE_URL } from "..";

const Investment = () => {
	const [popupInvestmentVisible, setPopupInvestmentVisible] = useState(false);

	const [first, setFirst] = useState(0);
	const [loading, setLoading] = useState(false);
	const [selectedInvestment, setSelectedInvestment] = useState(null);

    const [villeInput, setVilleInput] = useState('');
    const [etatAvanceInput, setEtatAvanceInput] = useState('');

	const [investments, setInvestments] = useState([]);
	
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
			<InvestmentCard visible={popupInvestmentVisible}
			onHide={() => {
				setPopupInvestmentVisible(false)
				setSelectedInvestment(null)
				loadInvestments()
			}}
			investment={selectedInvestment}></InvestmentCard>
			
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
						<div className="card">
							{
								(!loading && 
								<DataTable value={investments} responsiveLayout="scroll" 
									paginator rows={10} first={first} onPage={(e) => setFirst(e.first)}
									selectionMode="single"
									selection={selectedInvestment} onSelectionChange={e => 
										{
											setSelectedInvestment(e.value)
										}
									}
									onRowDoubleClick = {e => 
										{
											setPopupInvestmentVisible(true)
										}
									}>
									<Column field="titreoperation" header="Titre"></Column>
									<Column field="entreprise" header="Entreprise"></Column>
									<Column field="annee_de_livraison" header="Année de livraison"></Column>
									<Column field="ville" header="Ville"></Column>
									<Column field="etat_d_avancement" header="État d'avancement"></Column>
								</DataTable>) ||
								<DataTable value={Array.from({ length: 10 })} responsiveLayout="scroll">
									<Column field="titreoperation" header="Titre" body={<Skeleton></Skeleton>}></Column>
									<Column field="entreprise" header="Entreprise" body={<Skeleton></Skeleton>}></Column>
									<Column field="annee_de_livraison" header="Année de livraison" body={<Skeleton></Skeleton>}></Column>
									<Column field="ville" header="Ville" body={<Skeleton></Skeleton>}></Column>
									<Column field="etat_d_avancement" header="État d'avancement" body={<Skeleton></Skeleton>}></Column>
								</DataTable>
							}
						</div>
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

export default Investment;

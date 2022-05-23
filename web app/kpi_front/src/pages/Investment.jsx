import React, { useEffect, useState } from "react";
import Layout from "../Layouts";
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from "axios";

const Investment = () => {
    const [villeInput, setVilleInput] = useState('');
    const [etatAvanceInput, setEtatAvanceInput] = useState('');

	const [investments, setInvestments] = useState([]);

	useEffect(() => {
        setInvestments([
			{
				"test1":"testA1",
				"test2":"testA2"
			},
			{
				"test1":"testB1",
				"test2":"testB2"
			}
		]);
    }, []);

	return (
		<Layout>
			<div className="page_container">
				<div className="home_container align-items-start">
					<div data-aos="fade-up" className="d-flex justify-content-center align-items-center">
						<p className="text-white f20 mb-0 me-1">Filtrer par ville : </p><InputText value={villeInput} onChange={(e) => setVilleInput(e.target.value)} />
						<p className="text-white f20 mb-0 me-1 ms-1">flitrer par état d'avancement : </p><InputText value={etatAvanceInput} onChange={(e) => setEtatAvanceInput(e.target.value)} />
					</div>
					<div data-aos="fade-down" className="">
					<div className="card">
						<DataTable value={investments} responsiveLayout="scroll">
							<Column field="test1" header="Test1"></Column>
							<Column field="test2" header="Test2"></Column>
						</DataTable>
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

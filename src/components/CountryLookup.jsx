"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CountryLookup() {
	const [country, setCountry] = useState({
		city: "",
		region: "",
		country_name: "",
	});
	const [ip, setIP] = useState("");

	const getData = async () => {
		const res = await axios.get("https://api.ipify.org/?format=json");
		console.log(res.data);
		setIP(res.data.ip);
	};

	useEffect(() => {
		//passing getData method to the lifecycle method
		getData();
	}, []);

	const getLocation = async () => {
		const res = await axios.get(` https://ipapi.co/${ip}/json/`);
		console.log(res.data);
		setCountry(res.data);
	};
	useEffect(() => {
		if (!ip) return;
		getLocation();
	}, [ip]);
	return (
		<div>
			{ip &&
				country.city +
					"," +
					country.region +
					"," +
					country.country_name}
		</div>
	);
}

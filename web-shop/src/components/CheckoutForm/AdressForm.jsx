import React, {useState, useEffect} from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import FormInput from './CustomTextField';
import { commerce } from '../../lib/commerce';
import { keys } from '@material-ui/core/styles/createBreakpoints';


const AdressForm = ({ checkoutToken }) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    const methods = useForm();
   
    const countries = Object.entries(shippingCountries).map(([code, name]) => ({id: code, label: name}));
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({id: code, label: name}));

    const fetchShippingCountries = async (checkoutTokenId) => {
        const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);
        
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
    }

    const fetchSubdivisions = async (countryCode) =>{
        const {subdivisions} = await commerce.services.localeListSubdivisions(countryCode);

        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0]);
    }

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
    }, [])
    
    useEffect(() => {
        if (shippingCountry) fetchSubdivisions(shippingCountry);
    }, [shippingCountry])

  return (
    <>
        <Typography variant='h6' gutterBottom>Endereço para envio</Typography>
        <FormProvider {... methods}>
            <form onSubmit=''>
                <Grid container spacing={3}>
                    <FormInput required name='firstName' label='Primeiro nome' />
                    <FormInput required name='lastName' label='Segundo nome' />
                    <FormInput required name='email' label='Email' />
                    <FormInput required name='zip' label='Código Postal' />
                    <FormInput required name='address1' label='Endereço' />
                    <FormInput required name='city' label='Cidade' />
                    <Grid item xs={12} sm={6}>
                        <InputLabel>País de envio</InputLabel>
                        <Select value={shippingCountry} fullWidth onChange={(e)=> setShippingCountry(e.target.value)}>
                            {countries.map((country) => (
                                <MenuItem key={country.id} value={country.id}>
                                    {country.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Subdivisão</InputLabel>
                        <Select value={shippingSubdivision} fullWidth onChange={(e)=> setShippingSubdivision(e.target.value)}>
                            {subdivisions.map((subdivisions) => (
                                <MenuItem key={subdivisions.id} value={subdivisions.id}>
                                    {subdivisions.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    {/*<Grid item xs={12} sm={6}>
                        <InputLabel>Opções</InputLabel>
                        <Select value={} fullWidth onRateChange={}>
                            <MenuItem key={} value={}>
                                Selecione um opção
                            </MenuItem>
                        </Select>
                    </Grid>*/}
                    
                    
                </Grid>
            </form>
        </FormProvider>
    </>
  );
};

export default AdressForm;

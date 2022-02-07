import React, {useState, useEffect} from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { commerce } from '../../../lib/commerce';
import useStyles from './styles'
import AdressForm from '../AdressForm';
import PaymentForm from '../PaymentForm';

const steps = ['Endereço para envio ', 'Detalhes do pagamento'];

const Checkout = ({cart, order, onCaptureCheckout, error}) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const [isFinished, setIsFinished] = useState(false);
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});

                setCheckoutToken(token);
            } catch (error) {
                history.pushState('/');
            }
        }
        generateToken();
    }, [cart]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const next = (data) =>{
        setShippingData(data);

        nextStep();
    }

    const timeout = () => {
        setTimeout(() => {
            setIsFinished(true);
        }, 3000)
    }

    let Confirmation = () => (order.customer ? (
        <>
          <div>
            <Typography variant="h5">Obrigado pela sua prefetencia, {order.customer.firstname} {order.customer.lastname}!</Typography>
            <Divider className={classes.divider} />
            <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
          </div>
          <br />
          <Button component={Link} variant="outlined" type="button" to="/">Voltar para home</Button>
        </>
      ) : isFinished ? (
            <>
                <div>
                <Typography variant="h5">Obrigado pela sua preferência!</Typography>
                <Divider className={classes.divider} />
                
                </div>
                <br />
                <Button component={Link} variant="outlined" type="button" to="/">Voltar para home</Button>
            </>

      ) : (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      ));
    
      if (error) {
        Confirmation = () => (
          <>
            <Typography variant="h5">Error: {error}</Typography>
            <br />
            <Button component={Link} variant="outlined" type="button" to="/">Voltar para home</Button>
          </>
        );
      }

    const Form = () => activeStep === 0
        ? <AdressForm checkoutToken={checkoutToken} next={next}/>
        : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} onCaptureCheckout={onCaptureCheckout} timeout={timeout}/>


    return( 
        <>
            <CssBaseline />
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Comprar</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}> 
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </Paper>
            </main>

        </>
    ) 
};

export default Checkout;

/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line
import React from "react";



import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


import BankIcon from '@mui/icons-material/AccountBalance';



const ExpandMore = styled((props) => {

    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const ExpandMoree = styled((props) => {

    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const ExpandMored = styled((props) => {

    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


export default function tarifa() {
    const [expanded, setExpanded] = React.useState(false);



    const handleExpandClick = () => {
        setExpanded(!expanded);
    };



    const [expandede, setExpandede] = React.useState(false);



    const handleExpandClicke = () => {
        setExpandede(!expandede);
    };



    const [expandedd, setExpandedd] = React.useState(false);



    const handleExpandClickd = () => {
        setExpandedd(!expandedd);
    };




    return (
        <><div><section className="section bg-c-light border-top">

            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-4 text-center">
                        <h3 className="main-heading">COSTO POR HONORARIOS</h3>
                        <div className="underline mx-auto"></div>

                    </div>



                </div>

            </div>

        </section>


            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-left">


                            <p>
                                El costo de los honorarios profesionales, va depender de cada caso en concreto. Por ello le recomendamos sacar una cita con la especialista y de acuerdo a la complejidad de la materia tomara conocimiento cuánto es el costo total de los servicios.

                            </p>

                            <p>
                                El pago de los honorarios se puede realizar de manera mensual o por cuotas iguales y en forma sucesiva sin ningún recargo, garantizando el cumplimento de los servicios establecidos en un contrato.
                            </p>

                        </div>
                    </div>
                </div>
            </section>




            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">

                        <h3 className="main-headding">TARIFAS POR CONSULTAS</h3>
                        <div className="underline mx-auto"></div>
                    </div>
                </div>
            </div>

            <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4">


                            <Card sx={{ maxWidth: 345 }}>


                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://thelawyermagazine.com/wp-content/uploads/2022/07/image-35-1024x683.png"
                                    alt="Consulta en línea" />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        Costo: S/.150
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Si deseas mas información presiona en más en la parte inferior derecha.
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="share">
                                        <a
                                            href="https://api.whatsapp.com/send?phone=970746661"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <WhatsAppIcon />
                                        </a>

                                    </IconButton>
                                    <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>

                                        <Typography paragraph>
                                            Mediante depósito en cuenta y envío de la constancia al correo abogadosalvador5706@gmail.com indicando fecha y hora para atención.
                                        </Typography>

                                    </CardContent>
                                </Collapse>
                            </Card>


                        </div>





                        <div className="col-md-4">


                            <Card sx={{ maxWidth: 345 }}>


                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://i0.wp.com/adefinitivas.com/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-29-at-07.37.37.jpeg?w=674&ssl=1"
                                    alt="Consulta Presencial" />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        Costo: S/.250
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Si deseas mas información presiona en más en la parte inferior derecha.
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="share">
                                        <a
                                            href="https://api.whatsapp.com/send?phone=970746661"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <WhatsAppIcon />
                                        </a>

                                    </IconButton>
                                    <ExpandMoree
                                        expand={expandede}
                                        onClick={handleExpandClicke}
                                        aria-expanded={expandede}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMoree>
                                </CardActions>
                                <Collapse in={expandede} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>
                                            Mediante depósito en cuenta y envío de la constancia al correo abogadosalvador5706@gmail.com indicando fecha y hora para atención.
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>


                        </div>



                        <div className="col-md-4">


                            <Card sx={{ maxWidth: 345 }}>


                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://www.bufetemartinaranda.com/wp-content/uploads/2016/11/costas.jpg"
                                    alt="Consulta a domicilio" />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        Costo: S/.350
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Si deseas mas información presiona en más en la parte inferior derecha.
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="share">
                                        <a
                                            href="https://api.whatsapp.com/send?phone=970746661"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <WhatsAppIcon />
                                        </a>

                                    </IconButton>
                                    <ExpandMored
                                        expand={expandedd}
                                        onClick={handleExpandClickd}
                                        aria-expanded={expandedd}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMored>
                                </CardActions>
                                <Collapse in={expandedd} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>
                                            Horario de atención:
                                        </Typography>
                                        <Typography paragraph>
                                            Mediante depósito en cuenta y envío de la constancia al correo abogadosalvador5706@gmail.com indicando fecha y hora para atención.
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>


                        </div>



                    </div>
                </div>
            </section>




            <section className="section bg-c-light border-top">

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">COSTO POR HONORARIOS</h3>
                            <div className="underline mx-auto"></div>

                        </div>


                        <div className="col-md-12 mb-4 text-left">

                            <p>
                                El costo de los honorarios profesionales, va depender de cada caso en concreto. Por ello le recomendamos sacar una cita con la especialista y de acuerdo a la complejidad de la materia tomara conocimiento cuánto es el costo total de los servicios.

                            </p>

                            <p>
                                El pago de los honorarios se puede realizar de manera mensual o por cuotas iguales y en forma sucesiva sin ningún recargo, garantizando el cumplimento de los servicios establecidos en un contrato.
                            </p>

                        </div>



                    </div>
                </div>
            </section>






            <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4">


                            <Card sx={{ maxWidth: 345 }}>


                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://lh3.googleusercontent.com/pw/ADCreHccVXnROIVERq43go8HuD3iBheuH-65q3LQoO3mxuMTSBurJCAVzoNAIxNJUnmgjkPdgV9ua1QRczYsrR6hUNFx6DWqjKwB4wreyscVGCetssBOR4XGTnuh2UWT6H5sP0Jr6cd9m5H8-fGgTtRSb_qaMOR32ylbkUhWs4qFb3D8w6XsLFQ7X5pCYRu-a11YexsATjpoNwelLRTTA4Ximwm14COLX3tVMxs6QFerRKrG92pbZAWR7SxnGlOZSt69LrzskhxY7Z48rjlxmHnywT0njd27ux0lm8dH4IwkcZWIazbXSmZHnFWp9kqRKM90aeYmWGARm6v54hiExs1a_VhTtTzIh4Hz7GU_yKQWweJ-FmzhCYaPpy2Kl5mpCJUFkoDLau2LFNfEeleLNGtX9laeW9ktS2Uehsj4jAt2AGyo38pOUTwSbu54A3ssZBjiMiDHlS1W8wgPoVN47hwIu79xhL2-zysLcW-_pzTYDrSlRl2_yieR4op_O6acWKxsIPO8VM_KuyCtruEqoNS0v2T5oRWb76oSCDzMDAa3WLAMeTOo4CMZ7DZDt7Dj_r2KTGgnr_R2n_VXD3yC54-dfQKFc6QG4mCwZFEdO4Z8sJrSdxcx24Lag4AL7iZ-MjuMrqaTp5iiQyM84YWfO4EsAXbAJkWzDdGaoZDqARpw9bY3VZSskNpSjG6VulWS6z10jE-2EzMxn8r9fGJqzzCg9n_T22k-pSp-Ke-FVquHerm9KWcBgOMy01t9b3XfO3715TGKQVsw_NetqYKDru2z2cJPVLOr6cHZcVsX2FHklXRF2zt1FEDtHakiZVBNGqdc2yhjgAksaQXvf91ESFk8SuTzVAyfli2d7x4N27So72wRFSijJt4JLA-AB1sDWqpmdfcudDfUbCurnqubNkww0V32SwjlR_9tx2awe3z4C12vV94biaJ299oZp_QL=w1145-h644-s-no-gm?authuser=1"
                                    alt="Paella dish" />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                </CardContent>



                                <CardActions disableSpacing>
                                    <IconButton aria-label="share">
                                        <a
                                            href="https://www.viabcp.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <BankIcon />
                                        </a>

                                    </IconButton>

                                </CardActions>

                            </Card>


                        </div>





                        <div className="col-md-4">


                            <Card sx={{ maxWidth: 345 }}>


                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://lh3.googleusercontent.com/pw/ADCreHccVXnROIVERq43go8HuD3iBheuH-65q3LQoO3mxuMTSBurJCAVzoNAIxNJUnmgjkPdgV9ua1QRczYsrR6hUNFx6DWqjKwB4wreyscVGCetssBOR4XGTnuh2UWT6H5sP0Jr6cd9m5H8-fGgTtRSb_qaMOR32ylbkUhWs4qFb3D8w6XsLFQ7X5pCYRu-a11YexsATjpoNwelLRTTA4Ximwm14COLX3tVMxs6QFerRKrG92pbZAWR7SxnGlOZSt69LrzskhxY7Z48rjlxmHnywT0njd27ux0lm8dH4IwkcZWIazbXSmZHnFWp9kqRKM90aeYmWGARm6v54hiExs1a_VhTtTzIh4Hz7GU_yKQWweJ-FmzhCYaPpy2Kl5mpCJUFkoDLau2LFNfEeleLNGtX9laeW9ktS2Uehsj4jAt2AGyo38pOUTwSbu54A3ssZBjiMiDHlS1W8wgPoVN47hwIu79xhL2-zysLcW-_pzTYDrSlRl2_yieR4op_O6acWKxsIPO8VM_KuyCtruEqoNS0v2T5oRWb76oSCDzMDAa3WLAMeTOo4CMZ7DZDt7Dj_r2KTGgnr_R2n_VXD3yC54-dfQKFc6QG4mCwZFEdO4Z8sJrSdxcx24Lag4AL7iZ-MjuMrqaTp5iiQyM84YWfO4EsAXbAJkWzDdGaoZDqARpw9bY3VZSskNpSjG6VulWS6z10jE-2EzMxn8r9fGJqzzCg9n_T22k-pSp-Ke-FVquHerm9KWcBgOMy01t9b3XfO3715TGKQVsw_NetqYKDru2z2cJPVLOr6cHZcVsX2FHklXRF2zt1FEDtHakiZVBNGqdc2yhjgAksaQXvf91ESFk8SuTzVAyfli2d7x4N27So72wRFSijJt4JLA-AB1sDWqpmdfcudDfUbCurnqubNkww0V32SwjlR_9tx2awe3z4C12vV94biaJ299oZp_QL=w1145-h644-s-no-gm?authuser=1"
                                    alt="Paella dish" />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                </CardContent>


                                <CardActions disableSpacing>
                                    <IconButton aria-label="share">
                                        <a
                                            href="https://www.scotiabank.com.pe"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <BankIcon />
                                        </a>

                                    </IconButton>

                                </CardActions>

                            </Card>


                        </div>



                        <div className="col-md-4">


                            <Card sx={{ maxWidth: 345 }}>


                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://lh3.googleusercontent.com/pw/ADCreHccVXnROIVERq43go8HuD3iBheuH-65q3LQoO3mxuMTSBurJCAVzoNAIxNJUnmgjkPdgV9ua1QRczYsrR6hUNFx6DWqjKwB4wreyscVGCetssBOR4XGTnuh2UWT6H5sP0Jr6cd9m5H8-fGgTtRSb_qaMOR32ylbkUhWs4qFb3D8w6XsLFQ7X5pCYRu-a11YexsATjpoNwelLRTTA4Ximwm14COLX3tVMxs6QFerRKrG92pbZAWR7SxnGlOZSt69LrzskhxY7Z48rjlxmHnywT0njd27ux0lm8dH4IwkcZWIazbXSmZHnFWp9kqRKM90aeYmWGARm6v54hiExs1a_VhTtTzIh4Hz7GU_yKQWweJ-FmzhCYaPpy2Kl5mpCJUFkoDLau2LFNfEeleLNGtX9laeW9ktS2Uehsj4jAt2AGyo38pOUTwSbu54A3ssZBjiMiDHlS1W8wgPoVN47hwIu79xhL2-zysLcW-_pzTYDrSlRl2_yieR4op_O6acWKxsIPO8VM_KuyCtruEqoNS0v2T5oRWb76oSCDzMDAa3WLAMeTOo4CMZ7DZDt7Dj_r2KTGgnr_R2n_VXD3yC54-dfQKFc6QG4mCwZFEdO4Z8sJrSdxcx24Lag4AL7iZ-MjuMrqaTp5iiQyM84YWfO4EsAXbAJkWzDdGaoZDqARpw9bY3VZSskNpSjG6VulWS6z10jE-2EzMxn8r9fGJqzzCg9n_T22k-pSp-Ke-FVquHerm9KWcBgOMy01t9b3XfO3715TGKQVsw_NetqYKDru2z2cJPVLOr6cHZcVsX2FHklXRF2zt1FEDtHakiZVBNGqdc2yhjgAksaQXvf91ESFk8SuTzVAyfli2d7x4N27So72wRFSijJt4JLA-AB1sDWqpmdfcudDfUbCurnqubNkww0V32SwjlR_9tx2awe3z4C12vV94biaJ299oZp_QL=w1145-h644-s-no-gm?authuser=1"
                                    alt="Paella dish" />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                </CardContent>

                                <CardActions disableSpacing>
                                    <IconButton aria-label="share">
                                        <a
                                            href="https://www.bbva.pe"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <BankIcon />
                                        </a>

                                    </IconButton>

                                </CardActions>

                            </Card>


                        </div>



                    </div>
                </div>
            </section>








        </div><div>

















            </div></>









    );
}